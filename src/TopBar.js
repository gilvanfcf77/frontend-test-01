import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const TopBar = () =>
<div>
  <Navbar className="bg-light justify-content-between">
    <Container>
      <Form inline>
        <h1>Delfos</h1>
      </Form>
    </Container>
  </Navbar>
</div>

export default TopBar;
