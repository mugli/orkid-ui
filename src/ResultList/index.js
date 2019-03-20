import React, { Component } from 'react';
import { Callout } from '@blueprintjs/core';

import DataContainer from '../DataContainer';
import { feedLength } from '../config';
import gql from 'graphql-tag';

class ResultList extends Component {
  GET_LIST_DATA = gql`
    query Queue($nextCursor: String) {
      resultList {
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

  render() {
    return (
      <div style={{ marginTop: '20px' }}>
        <Callout title="Result List" style={{ marginBottom: '20px' }}>
          Showing latest results from successful tasks of all queues together. This is a capped list, older results will
          be removed automatically.
          <br />
          <br />
          <div>
            <strong>Hint</strong>: Return values from worker functions show here as result.
          </div>
        </Callout>
        <DataContainer graphqlQuery={this.GET_LIST_DATA} keyName="resultList" hideError={true} />
      </div>
    );
  }
}

export default ResultList;
