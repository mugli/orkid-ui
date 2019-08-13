import React, { Component } from 'react';

import { Button } from '@blueprintjs/core';

import Task from './Task';

class TaskFeed extends Component {
  taskTable = () => {
    const {
      tasks,
      hasNextPage,
      hasPrevPage,
      nextHandler,
      previousHandler,
      hideResult,
      hideError,
      hideQueueName,
      columnWidth
    } = this.props;

    return (
      <div>
        <div style={{ textAlign: 'right' }}>
          <Button icon="arrow-left" disabled={!hasPrevPage} onClick={previousHandler}>
            Previous
          </Button>
          <Button icon="arrow-right" disabled={!hasNextPage} onClick={nextHandler}>
            Next
          </Button>
        </div>

        <table className="bp3-html-table bp3-html-table-striped" style={{ width: '100%', tableLayout: 'fixed' }}>
          <thead>
            <tr>
              <th style={{ width: columnWidth.id }}>ID</th>
              <th style={{ width: columnWidth.dedupKey }}>Dedup Key</th>
              {hideQueueName ? null : <th style={{ width: columnWidth.qName }}>Queue</th>}
              <th style={{ width: columnWidth.retryCount }}>Retry Count</th>
              <th style={{ width: columnWidth.data }}>Data</th>
              {hideResult ? null : <th style={{ width: columnWidth.result }}>Result</th>}
              {hideError ? null : <th style={{ width: columnWidth.error }}>Error</th>}
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <Task
                task={task}
                key={task.id}
                hideResult={hideResult}
                hideError={hideError}
                hideQueueName={hideQueueName}
              />
            ))}
          </tbody>
        </table>

        <div style={{ textAlign: 'right', marginBottom: '30px', marginTop: '30px' }}>
          <Button icon="arrow-left" disabled={!hasPrevPage} onClick={previousHandler}>
            Previous
          </Button>
          <Button icon="arrow-right" disabled={!hasNextPage} onClick={nextHandler}>
            Next
          </Button>
        </div>
      </div>
    );
  };

  render() {
    const { tasks } = this.props;

    if (tasks.length) {
      return this.taskTable();
    } else {
      return <div style={{ marginTop: '40px', textAlign: 'center' }}>This list is empty!</div>;
    }
  }
}

export default TaskFeed;
