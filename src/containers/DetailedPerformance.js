import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Background from '../images/bg.jpeg';
import Footer from '../components/Footer';
import Table from 'react-bootstrap/Table';

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
        <h4>Version Information</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Qiskit</th>
              <th>Software Version</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Qiskit</td>
              <td>0.14.1</td>
            </tr>
            <tr>
              <td>Terra</td>
              <td> 0.11.1</td>
            </tr>
            <tr>
              <td>Aer</td>
              <td> 0.3.4</td>
            </tr>
            <tr>
              <td>Ignis</td>
              <td> 0.2.0</td>
            </tr>
            <tr>
              <td>Aqua</td>
              <td>0.6.2</td>
            </tr>
            <tr>
              <td>IBM Q Provider </td>
              <td>0.4.5</td>
            </tr>
            
            <tr>
              <th colSpan="2">System information</th>
            </tr>
            
            <tr>
              <td>Python</td>
              <td>  3.6.4 |Anaconda, Inc.| (default, Jan 16 2018, 10:22:32) [MSC v.1900 64 bit (AMD64)]</td>
            </tr>
            <tr>
              <td>OS</td>
              <td>Windows</td>
            </tr>
          </tbody>
        </Table>
      <br/>
      <h4>Output Files</h4>

      <ul>
        <li><a href="https://github.com/AnaNeri/quantamorphismsGuide/blob/master/circuit_cnot_7x2_quipper.txt" target="_blank" rel="noopener noreferrer">Circuit description - Quipper</a></li>
        <li><a href="https://github.com/AnaNeri/quantamorphismsGuide/blob/master/circuit_cnot_7x2_quipper_A.txt" target="_blank" rel="noopener noreferrer">Circuit description - Quipper Adapted</a></li>
        <li><a href="https://github.com/AnaNeri/quantamorphismsGuide/blob/master/circuit_cnot_7x2_qiskit.txt" target="_blank" rel="noopener noreferrer">Circuit description - Qiskit Adapted</a></li>
        <li><a href="https://github.com/AnaNeri/quantamorphismsGuide/blob/master/circuit_cnot_7x2_qiskit_pyzx.txt" target="_blank" rel="noopener noreferrer">Circuit description - PyZX</a></li>
      </ul>
      <br/>
        <h4>Circuit Information</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Circuit</th>
              <th>Circuit description</th>
              <th>Depth</th>
              <th>Operations</th>
              <th>size</th>
              <th>Tensor Factors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>qc</td>
              <td>Original quantum circuit</td>
              <td>81</td>
              <td>[('cx', 51),('t',24),('tdg',21),('h',18)]</td>
              <td>114</td>
              <td>1</td>
            </tr>
            <tr>
              <td>qc_m</td>
              <td>Original quantum circuit with measure gates</td>
              <td>81</td>
              <td>[('cx', 51),('t',24),('tdg',21),('h',18),('measure',4)]</td>
              <td>118</td>
              <td>1</td>
            </tr>
            <tr>
              <td>qc_sim</td>
              <td>Circuit transpiled</td>
              <td>132</td>
              <td>[('cx', 125),('u1', 33),('u2', 10),('measure', 4),('barrier', 1)]</td>
              <td>172</td>
              <td>16</td>
            </tr>
            <tr>
              <td>optimized_0</td>
              <td>Circuit transpiled with optimization type 0</td>
              <td>146</td>
              <td>[('cx', 126),('u1', 45),('u2', 18),('measure', 4),('barrier', 1)]</td>
              <td>193</td>
              <td>16</td>
            </tr>
            <tr>
              <td>optimized_1</td>
              <td>Circuit transpiled with optimization type 1</td>
              <td>147</td>
              <td>[('cx', 159),('u1', 37),('u2', 10),('measure', 4),('barrier', 1)]</td>
              <td>210</td>
              <td>16</td>
            </tr>
            <tr>
              <td>optimized_2</td>
              <td>Circuit transpiled with optimization type 2</td>
              <td>122</td>
              <td>[('cx', 125),('u1', 35),('u2', 10),('measure', 4),('barrier', 1)]</td>
              <td>174</td>
              <td>16</td>
            </tr>
            <tr>
              <td>optimized_3</td>
              <td>Circuit transpiled with optimization type 3</td>
              <td>139</td>
              <td>[('cx', 109),('u3', 43), ('u1', 20),('u2', 32),('measure', 4),('barrier', 1)]</td>
              <td>208</td>
              <td>16</td>
            </tr>
            <tr>
              <td>qc_pyzx</td>
              <td>Circuit rewritten with PyZX</td>
              <td>31</td>
              <td>[('cx', 17),('rz', 9),('h', 6),('measure', 4),('cz',3),('z', 1)]</td>
              <td>46</td>
              <td>1</td>
            </tr>
            <tr>
              <td>qc_sim_pyzx</td>
              <td>Circuit rewritten with PyZX and transpiled</td>
              <td>55</td>
              <td>[('cx', 60),('u1', 12),('u2', 10),('measure', 4),('barrier', 1)]</td>
              <td>86</td>
              <td>16</td>
            </tr>
            <tr>
              <td>qc_pyzx_o2</td>
              <td>Circuit rewritten with PyZX and transpiled  with optimization type 2</td>
              <td>59</td>
              <td>[('cx', 60),('u1', 12),('u2', 10),('measure', 4),('barrier', 1)]</td>
              <td>86</td>
              <td>14</td>
            </tr>
            <tr>
              <td>qc_pyzx_o3</td>
              <td>Circuit rewritten with PyZX and transpiled  with optimization type 3</td>
              <td>64</td>
              <td>[('cx', 58),('u3', 11),('u1', 8),('u2', 22),('measure', 4),('barrier', 1)]</td>
              <td>103</td>
              <td>14</td>
            </tr>
          </tbody>
        </Table>

        <br/>
        <h4>PyZX</h4>

        <Table striped bordered hover>      
          <thead>
            <tr>
              <th>Step</th>
              <th>Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>my_qc.stats()</td>
              <td>Circuit circuit_cnot_7x2_quipper_A.txt on 5 qubits with 114 gates.
                  45 is the T-count
                  69 Cliffords among which 
                  51 2-qubit gates and 18 Hadamard gates.</td>
            </tr>
            <tr>
              <td> my_qc.to_graph() </td>
              <td> Graph(175 vertices, 221 edges) </td>
            </tr>
            <tr>
              <td> zx.simplify.full_reduce(mg) </td>
              <td> Graph(37 vertices, 58 edges)</td>
            </tr>
            <tr>
              <td>mc</td>
              <td>Circuit(5 qubits, 74 gates)</td>
            </tr>
            <tr>
              <td>mc2</td>
              <td>Circuit  on 5 qubits with 101 gates.
                      15 is the T-count
                      86 Cliffords among which 
                      40 2-qubit gates and 46 Hadamard gates.
              </td>
            </tr>
            <tr>
              <td>mc3</td>
              <td>Circuit  on 5 qubits with 42 gates.
                  15 is the T-count
                  27 Cliffords among which 
                  20 2-qubit gates and 6 Hadamard gates.
              </td>
            </tr>
          </tbody>
        </Table>


        <br/>
        <h4>Simulations</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan="2">qc_m</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Input</th>
              <th>Output</th>
            </tr>
            <tr>
              <td>0000</td>
              <td>0000</td>
            </tr>
            <tr>
              <td>0001</td>
              <td>0001</td>
            </tr>
            <tr>
              <td>0010</td>
              <td>0010</td>
            </tr>
            <tr>
              <td>0011</td>
              <td>0011</td>
            </tr>
            <tr>
              <td>0100</td>
              <td>0100</td>
            </tr>
            <tr>
              <td>0101</td>
              <td>0101</td>
            </tr>
            <tr>
              <td>0110</td>
              <td>0111</td>
            </tr>
            <tr>
              <td>0111</td>
              <td>0110</td>
            </tr>
            <tr>
              <td>1000</td>
              <td>1001</td>
            </tr>
            <tr>
              <td>1001</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>1010</td>
              <td>1011</td>
            </tr>
            <tr>
              <td>1011</td>
              <td>1010</td>
            </tr>
            <tr>
              <td>1100</td>
              <td>1100</td>
            </tr>
            <tr>
              <td>1101</td>
              <td>1101</td>
            </tr>
            <tr>
              <td>1110</td>
              <td>1110</td>
            </tr>
            <tr>
              <td>1111</td>
              <td>1111</td>
            </tr>            
          </tbody>
        </Table>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan="2">qc_pyzx</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Input</th>
              <th>Output</th>
            </tr>
            <tr>
              <td>0000</td>
              <td>0000</td>
            </tr>
            <tr>
              <td>0001</td>
              <td>0001</td>
            </tr>
            <tr>
              <td>0010</td>
              <td>0010</td>
            </tr>
            <tr>
              <td>0011</td>
              <td>0011</td>
            </tr>
            <tr>
              <td>0100</td>
              <td>0100</td>
            </tr>
            <tr>
              <td>0101</td>
              <td>0101</td>
            </tr>
            <tr>
              <td>0110</td>
              <td>0111</td>
            </tr>
            <tr>
              <td>0111</td>
              <td>0110</td>
            </tr>
            <tr>
              <td>1000</td>
              <td>1001</td>
            </tr>
            <tr>
              <td>1001</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>1010</td>
              <td>1011</td>
            </tr>
            <tr>
              <td>1011</td>
              <td>1010</td>
            </tr>
            <tr>
              <td>1100</td>
              <td>1100</td>
            </tr>
            <tr>
              <td>1101</td>
              <td>1101</td>
            </tr>
            <tr>
              <td>1110</td>
              <td>1110</td>
            </tr>
            <tr>
              <td>1111</td>
              <td>1111</td>
            </tr>            
          </tbody>
        </Table>

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