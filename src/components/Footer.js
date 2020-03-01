import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Background from '../images/bg.jpeg';

function FooterInfo(){
  return (

  	<div>
       <Container>
	       <Row>
			<Col lg={10}>
				<Row>
				<Col md={11}>
		       	<br/>
		       	<center>
		       	<i>Compiling quantamorphisms for the IBM Q-Experience</i>
		    	</center>
		       	<br/>
		       	<br/>

		    	</Col>
		    	</Row>
	       </Col>
	       </Row>
       </Container> 
    </div>
  );	
}

function Footer() {
  return (
  	<div style= {{ backgroundImage: `url(${Background})`}}>
       <Container>
	       <Row>
	       	<Col md={1}>
	       	</Col>
		    <Col md={11}>
		       <FooterInfo />
		    </Col>
	       </Row>
       </Container> 
    </div>
  );
}

export default Footer;