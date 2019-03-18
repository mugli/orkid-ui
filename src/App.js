import React, { Component } from 'react';
import {
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Classes,
  Alignment,
  AnchorButton,
  Callout,
  Button,
  Code,
  Colors,
  Card,
  H2,
  H5,
  H6,
  Intent,
  Switch,
  Divider,
  ButtonGroup,
  Elevation
} from '@blueprintjs/core';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading className={Classes.LARGE}>Orkid Dashboard</NavbarHeading>
            <NavbarDivider />
            <Button className={Classes.MINIMAL} icon="home" text="Queues" />
            <Button className={Classes.MINIMAL} icon="updated" text="Result List" />
            <Button className={Classes.MINIMAL} icon="error" text="Failed List" />
            <Button className={Classes.MINIMAL} icon="ban-circle" text="Dead List" />
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Button className={Classes.MINIMAL} icon="share" text="GitHub" />
          </NavbarGroup>
        </Navbar>

        <div style={{ maxWidth: '1170px', marginLeft: 'auto', marginRight: 'auto' }}>
          <Callout title={'Stats'} style={{ textAlign: 'center', marginBottom: '50px' }}>
            <ButtonGroup minimal={true} style={{ display: 'flex' }}>
              <Card elevation={Elevation.TWO} style={{ flex: 1 }}>
                <H5 style={{ color: Colors.COBALT5 }}>Processed</H5>
                <H6>23525</H6>
              </Card>
              <Card elevation={Elevation.TWO} style={{ flex: 1 }}>
                <H5 style={{ color: Colors.COBALT5 }}>Waiting</H5>
                <H6>23525</H6>
              </Card>
              <Card elevation={Elevation.TWO} style={{ flex: 1 }}>
                <H5 style={{ color: Colors.COBALT5 }}>Failed</H5>
                <H6>23525</H6>
              </Card>
              <Card elevation={Elevation.TWO} style={{ flex: 1 }}>
                <H5 style={{ color: Colors.COBALT5 }}>Dead</H5>
                <H6>23525</H6>
              </Card>
              <Card elevation={Elevation.TWO} style={{ flex: 1 }}>
                <H5 style={{ color: Colors.COBALT5 }}>Retries</H5>
                <H6>23525</H6>
              </Card>
            </ButtonGroup>
          </Callout>

          <H2 style={{ textAlign: 'center' }}>Queues</H2>
          <table className="bp3-html-table bp3-html-table-bordered bp3-html-table-striped" style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Queue Name</th>
                <th>Pending Tasks</th>
                <th>Active Workers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={Classes.MONOSPACE_TEXT}>
                  <a href="#">insert-to-elasticsearch</a>
                </td>
                <td>100</td>
                <td>5</td>
              </tr>
              <tr>
                <td className={Classes.MONOSPACE_TEXT}>
                  <a href="#">sms</a>
                </td>
                <td>100</td>
                <td>5</td>
              </tr>
              <tr>
                <td className={Classes.MONOSPACE_TEXT}>
                  <a href="#">mailer</a>
                </td>
                <td>100</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
