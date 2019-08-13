import React, { Component } from 'react';

import Home from './Home';
import ResultList from './ResultList';
import FailedList from './FailedList';
import DeadList from './DeadList';

import { Navbar, NavbarDivider, NavbarGroup, NavbarHeading, Classes, Alignment, Button } from '@blueprintjs/core';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { activeTabIndex: 0 };
  }

  changeActiveTab = activeTabIndex => {
    this.setState({ activeTabIndex });
  };

  tabs = [<Home />, <ResultList />, <FailedList />, <DeadList />];

  render() {
    const { activeTabIndex } = this.state;

    return (
      <div>
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading
              className={Classes.LARGE}
              onClick={() => this.changeActiveTab(0)}
              style={{ display: 'inline-flex', cursor: 'pointer' }}>
              <img src="./orkid.svg" alt="Orkid Logo" style={{ margin: '10px', filter: 'invert(100%)' }} />
              <h4>Orkid Dashboard</h4>
            </NavbarHeading>
            <NavbarDivider />
            <Button
              className={Classes.MINIMAL}
              icon="home"
              text="Queues"
              active={activeTabIndex === 0}
              onClick={() => this.changeActiveTab(0)}
            />
            <NavbarDivider />
            <Button
              className={Classes.MINIMAL}
              icon="grid-view"
              text="Result List"
              active={activeTabIndex === 1}
              onClick={() => this.changeActiveTab(1)}
            />
            <NavbarDivider />
            <Button
              className={Classes.MINIMAL}
              icon="error"
              text="Failed List"
              active={activeTabIndex === 2}
              onClick={() => this.changeActiveTab(2)}
            />
            <NavbarDivider />
            <Button
              className={Classes.MINIMAL}
              icon="ban-circle"
              text="Dead List"
              active={activeTabIndex === 3}
              onClick={() => this.changeActiveTab(3)}
            />
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <a href="https://github.com/mugli/orkid-node" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </NavbarGroup>
        </Navbar>

        <div className="orkid-container">{this.tabs[this.state.activeTabIndex]}</div>
      </div>
    );
  }
}

export default App;
