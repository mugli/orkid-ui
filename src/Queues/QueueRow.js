import React, { Component } from 'react';

import { Classes } from '@blueprintjs/core';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class QueueRow extends Component {
  GET_QUEUE_DATA = gql`
    query Queue($queueName: String!) {
      queue(name: $queueName) {
        name
        taskCount
        isPaused
        activeWorkerCount
      }
    }
  `;

  render() {
    const { queueName } = this.props;

    return (
      <Query query={this.GET_QUEUE_DATA} variables={{ queueName }}>
        {({ data, loading, error }) => {
          const { queue } = data;

          if (loading) {
            return null;
          }

          if (error) {
            return null;
          }

          return (
            <tr>
              <td className={Classes.MONOSPACE_TEXT}>
                <a href="#">{queue.name}</a>
              </td>
              <td>{queue.taskCount}</td>
              <td>{queue.activeWorkerCount}</td>
            </tr>
          );
        }}
      </Query>
    );
  }
}

export default QueueRow;
