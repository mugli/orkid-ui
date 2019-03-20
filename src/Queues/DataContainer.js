import React, { Component } from 'react';

import TaskFeed from '../TaskFeed';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class QueueDataContainer extends Component {
  GET_QUEUE_DATA = gql`
    query Queue($queueName: String!, $nextCursor: String) {
      queue(name: $queueName) {
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

  constructor(props) {
    super(props);

    this.state = { hasNextPage: false, nextCursor: undefined };
  }

  availableNextCursor = undefined;
  cursorStack = [];

  nextHandler = () => {
    const { hasNextPage } = this.state;

    if (hasNextPage) {
      this.cursorStack.push(this.state.nextCursor);
      this.setState({ nextCursor: this.availableNextCursor });
    }
  };

  previousHandler = () => {
    if (this.cursorStack.length) {
      const lastCursor = this.cursorStack.pop();
      this.setState({ nextCursor: lastCursor });
    }
  };

  handleQueryComplete = ({
    queue: {
      taskFeed: { hasNextPage, nextCursor }
    }
  }) => {
    this.availableNextCursor = nextCursor;

    if (this.state.hasNextPage !== hasNextPage) {
      this.setState({ hasNextPage });
    }
  };

  render() {
    const { queueName } = this.props;
    const { nextCursor } = this.state;

    return (
      <Query
        query={this.GET_QUEUE_DATA}
        variables={{ queueName, nextCursor }}
        onCompleted={data => this.handleQueryComplete(data)}>
        {({ data, loading, error }) => {
          if (loading) {
            return null;
          }

          if (error) {
            return null;
          }

          const { queue } = data;

          return (
            <TaskFeed
              tasks={queue.taskFeed.tasks}
              hasNextPage={queue.taskFeed.hasNextPage}
              hasPrevPage={!!this.cursorStack.length}
              nextHandler={this.nextHandler}
              previousHandler={this.previousHandler}
            />
          );
        }}
      </Query>
    );
  }
}

export default QueueDataContainer;
