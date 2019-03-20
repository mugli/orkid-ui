import React, { Component } from 'react';

import { H2, Breadcrumbs } from '@blueprintjs/core';

import QueueTable from './QueueTable';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class QueueContainer extends Component {
  GET_QUEUE_NAMES = gql`
    {
      queueNames
    }
  `;

  constructor(props) {
    super(props);
    this.state = { selectedQueue: 'insert-to-elasticsearch' };
  }

  render() {
    const { selectedQueue } = this.state;

    return (
      <div>
        <H2 style={{ textAlign: 'center' }}>Queues</H2>

        <Query query={this.GET_QUEUE_NAMES}>
          {({ data, loading, error }) => {
            if (loading) {
              return null;
            }

            if (error) {
              return null;
            }

            const { queueNames } = data;
            if (selectedQueue) {
              const ITEMS = [{ href: '#', text: 'Queues' }, { href: '#', text: selectedQueue }];

              return <Breadcrumbs items={ITEMS} />;
            } else {
              return <QueueTable queueNames={queueNames} />;
            }
          }}
        </Query>
      </div>
    );
  }
}

export default QueueContainer;
