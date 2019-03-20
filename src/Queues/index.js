import React, { Component } from 'react';

import { H2, Breadcrumbs, Intent } from '@blueprintjs/core';

import QueueTable from './Table';
import DataContainer from '../DataContainer';
import { feedLength } from '../config';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class QueueContainer extends Component {
  GET_QUEUE_NAMES = gql`
    {
      queueNames
    }
  `;

  constructor(props) {
    super(props);
    this.state = { selectedQueue: undefined };
  }

  query = gql`
    query Queue($queueName: String!, $nextCursor: String) {
      queue(name: $queueName) {
        taskFeed(limit: ${feedLength}, nextCursor: $nextCursor) {
          hasNextPage
          nextCursor
          tasks {
            id
            data
            dedupKey
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

  handleQueueSelection = selectedQueue => {
    this.setState({ selectedQueue });
  };

  render() {
    const { selectedQueue } = this.state;

    return (
      <div>
        <Query query={this.GET_QUEUE_NAMES}>
          {({ data, loading, error }) => {
            if (loading) {
              return null;
            }

            if (error) {
              return null;
            }

            const { queueNames } = data;
            if (selectedQueue) {
              const ITEMS = [
                {
                  text: 'List of Queues',
                  onClick: () => this.handleQueueSelection(undefined),
                  intent: Intent.DANGER
                },
                { text: selectedQueue, current: true }
              ];

              return (
                <div>
                  <Breadcrumbs items={ITEMS} />
                  <h3 style={{ marginTop: '20px', textAlign: 'center' }}>Pending Tasks</h3>
                  <DataContainer
                    queueName={selectedQueue}
                    graphqlQuery={this.query}
                    keyName="queue"
                    hideResult={true}
                    hideError={true}
                  />
                </div>
              );
            } else {
              return (
                <div>
                  <H2 style={{ textAlign: 'center' }}>Queues</H2>
                  <QueueTable queueNames={queueNames} handleQueueSelection={this.handleQueueSelection} />
                </div>
              );
            }
          }}
        </Query>
      </div>
    );
  }
}

export default QueueContainer;
