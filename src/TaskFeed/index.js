import React, { Component } from 'react';

import { Classes, Button } from '@blueprintjs/core';

import Task from './Task';

class TaskFeed extends Component {
  render() {
    const { tasks, hasNextPage, hasPrevPage, nextHandler, previousHandler } = this.props;

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
              <th>ID</th>
              <th>Dedup Key</th>
              <th>Retry Count</th>
              <th style={{ width: '25%' }}>Data</th>
              <th style={{ width: '25%' }}>Result</th>
              <th style={{ width: '25%' }}>Error</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <Task task={task} key={task.id} />
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
  }
}

export default TaskFeed;
