import React, { Component } from 'react';
import Stat from './Stat';
import QueueContainer from './Queues';

import {
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Classes,
  Alignment,
  Button,
  Code,
  Colors,
  H2,
  Breadcrumbs,
  ButtonGroup,
  Elevation
} from '@blueprintjs/core';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading className={Classes.LARGE}>
              <h4>Orkid Dashboard</h4>
            </NavbarHeading>
            <NavbarDivider />
            <Button className={Classes.MINIMAL} icon="home" text="Queues" active />
            <NavbarDivider />
            <Button className={Classes.MINIMAL} icon="updated" text="Result List" />
            <NavbarDivider />
            <Button className={Classes.MINIMAL} icon="error" text="Failed List" />
            <NavbarDivider />
            <Button className={Classes.MINIMAL} icon="ban-circle" text="Dead List" />
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Button className={Classes.MINIMAL} icon="share" text="GitHub" />
          </NavbarGroup>
        </Navbar>

        <div style={{ maxWidth: '1170px', marginLeft: 'auto', marginRight: 'auto' }}>
          <Stat />
          <QueueContainer />
        </div>
      </div>
    );
  }
}

export default App;
