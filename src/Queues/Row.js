import React from 'react';

import { Classes, Button, Intent } from '@blueprintjs/core';

import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';

const GET_QUEUE_DATA = gql`
  query Queue($queueName: String!) {
    queue(name: $queueName) {
      name
      stat {
        processed
        failed
        dead
        waiting
        retries
      }
      isPaused
      activeWorkerCount
    }
  }
`;
function QueueRow({ queueName, handleQueueSelection }) {
  const { loading, error, data = {} } = useQuery(GET_QUEUE_DATA, {
    variables: { queueName }
  });

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
      <td>{queue.stat.waiting}</td>
      <td>{queue.stat.processed}</td>
      <td>{queue.stat.failed}</td>
      <td>{queue.stat.retries}</td>
      <td>{queue.stat.dead}</td>
      <td>{queue.activeWorkerCount}</td>
    </tr>
  );
}

export default QueueRow;
