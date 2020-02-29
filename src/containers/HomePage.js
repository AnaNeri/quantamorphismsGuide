import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Background from '../images/bg.jpeg';

function Content() {
  return (
    <div >
    <br/>
    <Container>
		<Row>
		<Col lg={10}>
			<Row>
			<Col md={11}>
       	<br/>
        <p>
        This Guide is indended to support the reading of sections 15 to 17 of paper <i>Compiling quantamorphisms for the IBM Q-Experience</i>. These address the use of a tool-chain leading to running quantum circuits generated from quantamorphism specifications on IBM Q-Experience devices.
        </p>

        <br/>
        <ul>
        <li><a href="/caseStudy"> Case Study </a></li>
        <li><a href="/replicationPackage"> Replication Package </a></li>
        <li><a href="/detailedPerformance"> Detailed Performance </a></li>
        </ul>
    	</Col>
    	</Row>
    	</Col>
    	</Row>
    	</Container>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <div style= {{ backgroundImage: `url(${Background})`}}>
      <center><h1><br/><br/> 
      Compiling quantamorphisms for the IBM Q-Experience 
      <br/><br/><br/></h1></center>
      </div>
      <div>
       <Container>
       <Row>
       <Col md={2}>
       </Col>
       <Col md={10}>
       	<Content />
       </Col>
       </Row>  
	   </Container>
      </div>
    </div>
  );
}

export default HomePage;