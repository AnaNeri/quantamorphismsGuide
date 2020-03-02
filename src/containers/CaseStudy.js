import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Background from '../images/bg.jpeg';
import Footer from '../components/Footer'
import Figure from 'react-bootstrap/Figure';
import matrix from '../images/matrix.png';


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

        <p>The example analyzed in the paper starts with the generation of the unitary matrix using a quantum fold over a control-not gate. Despite quantum computers managing a considerable number of qubits, this example only manipulates 4 qubits. </p>
        <Figure>
          <Figure.Image
            src={matrix}
          />
          <Figure.Caption>
            Matrix qfold over cnot with 4 qubits.
          </Figure.Caption>
        </Figure>
    	</Col>
    	</Row>
    	</Col>
    	</Row>
    	</Container>
    </div>
  );
}

function CaseStudy() {
  return (
    <div>
      <div style= {{ backgroundImage: `url(${Background})`}}>
      <center><h1><br/><br/> 
      Case Study 
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

export default CaseStudy;