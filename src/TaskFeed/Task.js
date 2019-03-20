import React, { Component } from 'react';

import { Classes } from '@blueprintjs/core';

class Task extends Component {
  render() {
    const { task, hideResult, hideError, hideQueueName } = this.props;

    return (
      <tr>
        <td style={{ wordBreak: 'break-all' }} className={Classes.MONOSPACE_TEXT}>
          {task.id}
        </td>
        <td style={{ wordBreak: 'break-all' }}>{task.dedupKey}</td>
        {hideQueueName ? null : <td>{task.qname}</td>}
        <td>{task.retryCount}</td>
        <td>
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{task.data}</pre>
        </td>
        {hideResult ? null : (
          <td>
            <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{task.result}</pre>
          </td>
        )}
        {hideError ? null : (
          <td>
            <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{JSON.stringify(task.error, null, 2)}</pre>
          </td>
        )}
        <td>{new Date(task.at).toLocaleString()}</td>
      </tr>
    );
  }
}

export default Task;
