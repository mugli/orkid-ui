import React, { Component } from 'react';
import { Callout } from '@blueprintjs/core';
import DataContainer from '../DataContainer';
import { feedLength } from '../config';
import gql from 'graphql-tag';

class FailedList extends Component {
  GET_LIST_DATA = gql`
    query Queue($nextCursor: String) {
      failedList {
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

  render() {
    return (
      <div style={{ marginTop: '20px' }}>
        <Callout title="🌗 Failed List" style={{ marginBottom: '20px' }}>
          Showing latest errors from all failed tasks of any queues. This is a capped list, older results will be
          removed automatically.
        </Callout>
        <DataContainer
          graphqlQuery={this.GET_LIST_DATA}
          keyName="failedList"
          hideResult={true}
          columnWidth={{ id: '8%', dedupKey: '8%', qName: '8%', retryCount: '8%', data: '30%', error: '25%' }}
        />
      </div>
    );
  }
}

export default FailedList;
