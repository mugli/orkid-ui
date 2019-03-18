import React, { Component } from 'react';
import Stat from './Stat';

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

const ITEMS = [{ href: '#', text: 'Queues' }, { href: '#', text: 'insert-to-elasticsearch' }];

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
          <Breadcrumbs items={ITEMS} />

          <div style={{ textAlign: 'right' }}>
            <Button icon="arrow-left">Previous</Button>
            <Button icon="arrow-right">Next</Button>
          </div>
          <table
            className="bp3-html-table bp3-html-table-bordered bp3-html-table-striped"
            style={{ width: '100%', tableLayout: 'fixed' }}>
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
              <tr>
                <td style={{ wordBreak: 'break-all' }} className={Classes.MONOSPACE_TEXT}>
                  1552925211012-0
                </td>
                <td style={{ wordBreak: 'break-all' }}>null</td>
                <td>5</td>
                <td>
                  <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                    {JSON.stringify(
                      {
                        firstName: 'Bud',
                        lastName: 'Hayes',
                        email: 'Petra84@yahoo.com',
                        body:
                          'Consectetur qui qui at. Iste quibusdam voluptas voluptatem eum quasi. Debitis ullam doloremque aspernatur similique.'
                      },
                      null,
                      2
                    )}
                  </pre>
                </td>
                <td>
                  <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                    {JSON.stringify(
                      {
                        done: true
                      },
                      null,
                      2
                    )}
                  </pre>
                </td>
                <td>
                  <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                    {JSON.stringify(
                      {
                        name: 'Error',
                        message: 'violet',
                        stack:
                          'Error: violet\n    at getErrorDetails (/Users/mehdi/work/Projects/orkid-api/utils/seed.js:141:13)\n    at seedFailed (/Users/mehdi/work/Projects/orkid-api/utils/seed.js:78:18)\n    at seed (/Users/mehdi/work/Projects/orkid-api/utils/seed.js:23:41)\n    at process._tickCallback (internal/process/next_tick.js:68:7)'
                      },
                      null,
                      2
                    )}
                  </pre>
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ textAlign: 'right', marginBottom: '30px', marginTop: '30px' }}>
            <Button icon="arrow-left">Previous</Button>
            <Button icon="arrow-right">Next</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
