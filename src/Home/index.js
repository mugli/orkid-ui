import React, { Component } from 'react';
import Stat from './Stat';
import QueueContainer from '../Queues';

class Home extends Component {
  render() {
    return (
      <div>
        <Stat />
        <QueueContainer />
      </div>
    );
  }
}

export default Home;
