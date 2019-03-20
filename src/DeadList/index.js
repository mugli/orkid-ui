import React, { Component } from 'react';
import { Callout } from '@blueprintjs/core';
import DataContainer from '../DataContainer';
import { feedLength } from '../config';
import gql from 'graphql-tag';

class DeadList extends Component {
  GET_LIST_DATA = gql`
    query Queue($nextCursor: String) {
      deadList {
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
        <Callout title="Dead List" style={{ marginBottom: '20px' }}>
          Showing failed tasks from all queues that exceeded their retry limit. This is a capped list, older results
          will be removed automatically.
        </Callout>
        <DataContainer graphqlQuery={this.GET_LIST_DATA} keyName="deadList" hideResult={true} />
      </div>
    );
  }
}

export default DeadList;
