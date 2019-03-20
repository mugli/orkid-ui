import React, { Component } from 'react';

import { Classes } from '@blueprintjs/core';

class Task extends Component {
  render() {
    const { task } = this.props;

    return (
      <tr>
        <td style={{ wordBreak: 'break-all' }} className={Classes.MONOSPACE_TEXT}>
          {task.id}
        </td>
        <td style={{ wordBreak: 'break-all' }}>null</td>
        <td>5</td>
        <td>
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{task.data}</pre>
        </td>
        <td>
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{task.result}</pre>
        </td>
        <td>
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{JSON.stringify(task.error, null, 2)}</pre>
        </td>
      </tr>
    );
  }
}

export default Task;
