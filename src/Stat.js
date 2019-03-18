import React, { Component } from 'react';

import { Callout, Colors, Card, H5, H6, ButtonGroup, Elevation, NonIdealState } from '@blueprintjs/core';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class Stat extends Component {
  GET_GLOBAL_STATES = gql`
    {
      stat {
        processed
        failed
        dead
        waiting
        retries
      }
    }
  `;

  render() {
    return (
      <Callout title={'Stats'} style={{ textAlign: 'center', marginBottom: '50px' }}>
        <Query query={this.GET_GLOBAL_STATES}>
          {({ data, loading, error }) => {
            if (loading) {
              return <div>Loading ...</div>;
            }

            if (error) {
              return <NonIdealState icon="info-sign" title={error.message} />;
            }

            const { stat } = data;

            return (
              <ButtonGroup minimal={true} style={{ display: 'flex' }}>
                <Card elevation={Elevation.TWO} style={{ flex: 1 }}>
                  <H5 style={{ color: Colors.COBALT5 }}>Processed</H5>
                  <H6>{stat.processed}</H6>
                </Card>
                <Card elevation={Elevation.TWO} style={{ flex: 1 }}>
                  <H5 style={{ color: Colors.COBALT5 }}>Waiting</H5>
                  <H6>{stat.waiting}</H6>
                </Card>
                <Card elevation={Elevation.TWO} style={{ flex: 1 }}>
                  <H5 style={{ color: Colors.COBALT5 }}>Failed</H5>
                  <H6>{stat.failed}</H6>
                </Card>
                <Card elevation={Elevation.TWO} style={{ flex: 1 }}>
                  <H5 style={{ color: Colors.COBALT5 }}>Dead</H5>
                  <H6>{stat.dead}</H6>
                </Card>
                <Card elevation={Elevation.TWO} style={{ flex: 1 }}>
                  <H5 style={{ color: Colors.COBALT5 }}>Retries</H5>
                  <H6>{stat.retries}</H6>
                </Card>
              </ButtonGroup>
            );
          }}
        </Query>
      </Callout>
    );
  }
}

export default Stat;
