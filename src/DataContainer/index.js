import React, { Component } from 'react';
import { Spinner, NonIdealState } from '@blueprintjs/core';
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

  render() {
    const { queueName, graphqlQuery, keyName, hideResult, hideError, hideQueueName, columnWidth } = this.props;
    const { nextCursor } = this.state;

    return (
      <Query query={graphqlQuery} variables={{ queueName, nextCursor }}>
        {({ data, loading, error }) => {
          if (loading) {
            return <Spinner />;
          }

          if (error) {
            return <NonIdealState icon="info-sign" title={error.message} />;
          }

          this.availableNextCursor = data[keyName].taskFeed.nextCursor;

          return (
            <TaskFeed
              tasks={data[keyName].taskFeed.tasks}
              hasNextPage={data[keyName].taskFeed.hasNextPage}
              hasPrevPage={!!this.cursorStack.length}
              nextHandler={this.nextHandler}
              previousHandler={this.previousHandler}
              hideResult={hideResult}
              hideError={hideError}
              hideQueueName={hideQueueName}
              columnWidth={columnWidth}
            />
          );
        }}
      </Query>
    );
  }
}

export default QueueDataContainer;
