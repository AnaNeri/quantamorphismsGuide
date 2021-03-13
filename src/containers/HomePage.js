import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Background from '../images/bg.jpeg';
import { SocialIcon } from 'react-social-icons';

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
        <li><a href="https://nbviewer.jupyter.org/github/AnaNeri/quantamorphismsGuide/blob/master/improvements.ipynb" target="_blank" rel="noopener noreferrer">Improvements in the toolchain</a></li>
        </ul>

        <br/>
        <h4>Acknowledgments</h4>
        <p>This work is financed by the ERDF – European Regional Development Fund through the Operational Programme for Competitiveness and Internationalisation - COMPETE 2020 Programme and by National Funds through the Portuguese funding agency, FCT -- Fundação para a Ciência e a Tecnologia, within project POCI-01-0145-FEDER-030947.
    	  </p>
        <p>
        In this project, all experiments on IBM Q devices have been carried out under the IBM Q Hub at Minho license.
    	  We acknowledge the use of IBM Quantum services for this work. The views expressed are those of the authors, and do not reflect the official policy or position of IBM or the IBM Quantum team.
        </p>
      <br/>
    	<br/>
    	<br/>
    	<center><SocialIcon url="https://github.com/AnaNeri/quantamorphismsGuide"/></center>
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