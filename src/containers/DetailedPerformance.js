import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Background from '../images/bg.jpeg';
import Footer from '../components/Footer'


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
    	</Col>
    	</Row>
    	</Col>
    	</Row>
    	</Container>
    </div>
  );
}

function DetailedPerformance() {
  return (
    <div>      
      <div style= {{ backgroundImage: `url(${Background})`}}>
      <center><h1><br/><br/> 
      Detailed Performance
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

	    <footer>
        <Footer />
        </footer>
    </div>
  );
}

export default DetailedPerformance;