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
        <h4>Job Results</h4>

        <Table striped bordered hover>
          <thead>
             <tr>
              <th>Job</th>
              <th>Counts with ibmq_boeblingen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>qc_m </td>
              <td>'01110': 45, '10010': 46, '10000': 70, '00000': 166, '11110': 18, '01000': 81, '01100': 40, '11010': 46, '11000': 52, '00100': 71, '00010': 143, '10100': 30, '11100': 29, '00110': 73, '01010': 80, '10110': 34</td>
            </tr>
            <tr>
              <td>optimized_2 </td>
              <td>'01110': 38, '10010': 62, '10000': 57, '00000': 174, '11110': 23, '01000': 77, '01100': 28, '11010': 50, '11000': 61, '00100': 58, '00010': 171, '10100': 32, '11100': 18, '00110': 53, '01010': 95, '10110': 27</td>
            </tr>
            <tr>
              <td>optimized_3 </td>
              <td>'01110': 48, '10010': 41, '10000': 19, '00000': 140, '11110': 17, '01000': 115, '01100': 47, '11010': 26, '11000': 32, '00100': 68, '00010': 184, '10100': 14, '11100': 11, '00110': 79, '01010': 161, '10110': 22</td>
            </tr>
            <tr>
              <td>qc_pyzx </td>
              <td>'01110': 17, '10010': 71, '10000': 25, '00000': 187, '11110': 2, '01000': 48, '01100': 21, '11010': 13, '11000': 8, '00100': 72, '00010': 413, '10100': 9, '11100': 6, '00110': 49, '01010': 72, '10110': 11</td>
            </tr>
            <tr>
              <td>qc_pyzx_o2 </td>
              <td>'01110': 8, '10010': 97, '10000': 83, '00000': 175, '11110': 17, '01000': 37, '01100': 18, '11010': 30, '11000': 38, '00100': 72, '00010': 302, '10100': 18, '11100': 15, '00110': 48, '01010': 51, '10110': 15</td>
            </tr>            
            <tr>
              <td>qc_pyzx_o3 </td>
              <td>'01110': 7, '10010': 68, '10000': 67, '00000': 487, '11110': 3, '01000': 39, '01100': 11, '11010': 16, '11000': 13, '00100': 33, '00010': 214, '10100': 9, '11100': 3, '00110': 16, '01010': 36, '10110': 2</td>
            </tr>
            <tr>
              <td>mitigated_counts_py3</td>
              <td>'01101': 1.9025926667470827e-13, '00010': 231.42320558949913, '10110': 4.109007052796251e-12, '11101': 3.7355020335652633e-13, '10101': 4.127682353902151e-13, '11100': 7.1944631784177926e-12, '11010': 10.26373952357675, '00110': 10.496659988495209, '00100': 22.39818144617853, '11110': 6.602006891480092e-12, '11000': 6.027141230280036, '01010': 31.45169408193904, '01100': 3.8999590198554595, '01110': 1.379207151589422e-11, '10100': 0.9860952727654981, '01111': 9.08176935347435e-13, '10010': 72.53372987491537, '01000': 29.877042019718104, '10000': 63.0523429553835, '00000': 541.5902089976015, '11111': 2.8337000714667715e-13</td>
            </tr>
            <tr>
              <td>qc_1011 </td>
              <td>'01110': 46, '10010': 66, '10000': 89, '00000': 121, '11110': 51, '01000': 63, '01100': 48, '11010': 33, '11000': 53, '00100': 86, '00010': 79, '10100': 59, '11100': 44, '00110': 73, '01010': 57, '10110': 56</td>
            </tr>
            <tr>
              <td>qc_1011_pyzx</td>
              <td>'01110': 31, '10010': 55, '10000': 89, '00000': 31, '11110': 60, '01000': 9, '01100': 13, '11010': 18, '11000': 20, '00100': 93, '00010': 23, '10100': 337, '11100': 41, '00110': 54, '01010': 13, '10110': 137</td>
            </tr>
            <tr>
              <td>qc_pyzx_o3_1011</td>
              <td>'01110': 52, '10010': 88, '10000': 123, '00000': 91, '11110': 56, '01000': 42, '01100': 39, '11010': 84, '11000': 52, '00100': 55, '00010': 79, '10100': 60, '11100': 44, '00110': 46, '01010': 56, '10110': 57</td>
            </tr>
            <tr>
              <td>qc_pyzx_o2_1011</td>
              <td>'01110': 22, '10010': 66, '10000': 73, '00000': 51, '11110': 28, '01000': 11, '01100': 19, '11010': 21, '11000': 21, '00100': 111, '00010': 40, '10100': 143, '11100': 28, '00110': 138, '01010': 20, '10110': 232</td>
            </tr>
            <tr>
              <td>mitigated_counts_py2_1011</td>
              <td>'00010': 28.348896079648775, '10110': 278.46034881838597, '11100': 25.236287681747786, '11010': 16.398856577218712, '00110': 152.03936776335644, '00100': 108.01848479352613, '11110': 27.521920854591524, '11000': 15.003203857793961, '01010': 14.982431798926187, '01100': 12.329312835245497, '01110': 17.27124607417347, '10100': 155.49692467175146, '10010': 60.871105410866406, '01000': 3.6283887956429672, '10000': 71.01845109474996, '00000': 37.37477289246938</td>
            </tr>
            <tr>
              <td>mitigated_counts_py_1011</td>
              <td>'00010': 14.136299968825842, '10110': 156.76357040605757, '11100': 38.14535228132481, '11010': 10.70725016548844, '00110': 52.18851265331513, '00100': 81.50175904997565, '11110': 70.24992913629833, '11000': 12.385737366418335, '01010': 6.149067042338287, '01100': 3.8711620529374478, '01110': 29.21428388433393, '10100': 399.0275760047927, '01001': 2.2206062443564626e-13, '10010': 52.510893369859424, '01000': 2.2685604331294105, '10000': 80.8863180976907, '00000': 13.993728087350373</td>
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