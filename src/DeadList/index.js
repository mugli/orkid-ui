import React, { Component } from 'react';
import { Callout, NonIdealState } from '@blueprintjs/core';
import { Query } from 'react-apollo';
import DataContainer from '../DataContainer';
import { feedLength } from '../config';
import gql from 'graphql-tag';

class DeadList extends Component {
  GET_QUEUE_NAMES = gql`
    {
      queueNames
    }
  `;

  GET_LIST_DATA = gql`
  query List($nextCursor: String, $queueName: String) {
    deadList (queueName: $queueName){
      taskFeed(limit: ${feedLength}, nextCursor: $nextCursor) {
        hasNextPage
        nextCursor
        tasks {
          id
          data
          dedupKey
          qname
          retryCount
          result
          error {
            name
            message
            stack
          }
          at
        }
      }
    }
  }
  `;

  constructor(props) {
    super(props);
    this.state = { queueName: '' };

    this.handleChange = this.handleChange.bind(this);
    this.child = React.createRef();
  }

  handleChange(event) {
    this.child.current.resetCursor();
    this.setState({ queueName: event.target.value });
  }

  render() {
    const { queueName } = this.state;

    return (
      <div style={{ marginTop: '20px' }}>
        <Callout title="🌑 Dead List" style={{ marginBottom: '20px', padding: '20px' }}>
          <br />
          Showing failed tasks from all queues that exceeded their retry limit. This is a capped list, older results
          will be removed automatically.
        </Callout>
        <div>
          <Query query={this.GET_QUEUE_NAMES}>
            {({ data = {}, loading, error }) => {
              if (loading) {
                return null;
              }

              if (error) {
                return <NonIdealState icon="info-sign" title={error.message} />;
              }

              const { queueNames } = data;

              return (
                <div>
                  <label htmlFor="">Filter Queue: </label>
                  <select value={this.state.queueName} onChange={this.handleChange}>
                    <option defaultValue value=""></option>
                    {queueNames.map(q => (
                      <option key={q} value={q}>
                        {q}
                      </option>
                    ))}
                  </select>

                  <DataContainer
                    ref={this.child}
                    queueName={queueName}
                    graphqlQuery={this.GET_LIST_DATA}
                    keyName="deadList"
                    hideResult={true}
                    columnWidth={{ id: '8%', dedupKey: '8%', qName: '8%', retryCount: '8%', data: '30%', error: '25%' }}
                  />
                </div>
              );
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default DeadList;
