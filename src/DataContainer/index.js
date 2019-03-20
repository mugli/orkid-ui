import React, { Component } from 'react';

import TaskFeed from '../TaskFeed';

import { Query } from 'react-apollo';

class QueueDataContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { nextCursor: undefined };
  }

  availableNextCursor = undefined;
  cursorStack = [];

  nextHandler = () => {
    if (!!this.availableNextCursor) {
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

  handleQueryComplete = data => {
    const { keyName } = this.props;
    const { nextCursor } = data[keyName].taskFeed;
    this.availableNextCursor = nextCursor;
  };

  render() {
    const { queueName, graphqlQuery, keyName } = this.props;
    const { nextCursor } = this.state;

    return (
      <Query
        query={graphqlQuery}
        variables={{ queueName, nextCursor }}
        onCompleted={data => this.handleQueryComplete(data)}>
        {({ data, loading, error }) => {
          if (loading) {
            return null;
          }

          if (error) {
            return null;
          }

          return (
            <TaskFeed
              tasks={data[keyName].taskFeed.tasks}
              hasNextPage={data[keyName].taskFeed.hasNextPage}
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
