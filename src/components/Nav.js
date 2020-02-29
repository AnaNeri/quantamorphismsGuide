import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

// Toggle always showing becasue Navbar expand default is xxl

function MyNav() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/caseStudy">Case Study </Nav.Link>
          <Nav.Link href="/replicationPackage"> Replication Package</Nav.Link>
          <Nav.Link href="/detailedPerformance"> Detailed Performance</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default MyNav;