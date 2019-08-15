import React, { Component } from 'react';

import { Classes, Button, Intent } from '@blueprintjs/core';

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
    const { queueName, handleQueueSelection } = this.props;

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

          if (!queue) {
            return null;
          }

          return (
            <tr>
              <td className={Classes.MONOSPACE_TEXT}>
                <Button
                  className={Classes.MINIMAL}
                  intent={Intent.PRIMARY}
                  rightIcon="arrow-right"
                  onClick={() => handleQueueSelection(queueName)}
                >
                  {queue.name}
                </Button>
              </td>
              <td>
                <a onClick={() => handleQueueSelection(queueName)}>{queue.taskCount}</a>
              </td>
              <td>{queue.activeWorkerCount}</td>
            </tr>
          );
        }}
      </Query>
    );
  }
}

export default QueueRow;
