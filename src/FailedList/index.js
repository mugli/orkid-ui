import React, { Component } from 'react';

import DataContainer from '../DataContainer';

import gql from 'graphql-tag';

class FailedList extends Component {
  GET_LIST_DATA = gql`
    query Queue($nextCursor: String) {
      failedList {
        taskFeed(limit: 3, nextCursor: $nextCursor) {
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

  render() {
    return (
      <div style={{ marginTop: '20px' }}>
        <DataContainer graphqlQuery={this.GET_LIST_DATA} keyName="failedList" />
      </div>
    );
  }
}

export default FailedList;
