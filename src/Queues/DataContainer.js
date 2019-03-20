import React, { Component } from 'react';

import TaskFeed from '../TaskFeed';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class QueueDataContainer extends Component {
  GET_QUEUE_DATA = gql`
    query Queue($queueName: String!) {
      queue(name: $queueName) {
        taskFeed(limit: 3) {
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

  constructor(props) {
    super(props);

    this.state = { hasNextPage: false, nextCursor: undefined };
  }

  render() {
    const { queueName } = this.props;

    return (
      <Query query={this.GET_QUEUE_DATA} variables={{ queueName }}>
        {({ data, loading, error }) => {
          if (loading) {
            return null;
          }

          if (error) {
            return null;
          }

          const { queue } = data;
          return <TaskFeed tasks={queue.taskFeed.tasks} />;
        }}
      </Query>
    );
  }
}

export default QueueDataContainer;
