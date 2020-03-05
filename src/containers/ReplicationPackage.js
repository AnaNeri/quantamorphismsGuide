import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Background from '../images/bg.jpeg';
import Footer from '../components/Footer';
import Figure from 'react-bootstrap/Figure';


import toolchain from '../images/toolchain.png';

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

        <h4>Prerequisites and Installation Guide</h4>
        <p>
        This section presents all the software required and the installation guide to Ubuntu 18.04.4 .
        </p>

        <p>
        Install <a href="https://www.mathstat.dal.ca/~selinger/quipper/" target="_blank" rel="noopener noreferrer"><b>Quipper</b></a> (version 0.9),
        which needs <a href="https://www.haskell.org/" target="_blank" rel="noopener noreferrer"> Haskell </a> and <a href="https://www.haskell.org/cabal/" target="_blank" rel="noopener noreferrer"> Cabal </a>:
        </p>

        <div style= {{backgroundColor: `#263238`}}>
        <code style={{color:'white'}}> $ sudo apt install haskell-platform </code>
        <br/>
        <code style={{color:'white'}}> $ cabal update </code>
        </div>

        <br/>
        <p>
        Then run the following command line.
        </p>

        <div style= {{backgroundColor: `#263238`}}>
        <code style={{color:'white'}}> $ cabal install quipper </code>
        </div>

        <br/>
        <p>
        Probably, it is also necessary to run the ensuing commands.
        </p>
        <div style= {{backgroundColor: `#263238`}}>
        <code style={{color:'white'}}> $ echo 'PATH="$HOME/.cabal/bin:$PATH"' >> .bashrc </code>
        <br/>
        <code style={{color:'white'}}> $ source .bashrc </code>
        </div>

        <br/>
        <p>
        Create an <a href="https://quantum-computing.ibm.com/" target="_blank" rel="noopener noreferrer"><b> IBM Q Experienece</b> </a> account to run the quantum programs in a quantum device.
        </p>
        <p>
        Although IBM Q Experience allows running the experiences online, it may be necessary to install <a href="https://qiskit.org/" target="_blank" rel="noopener noreferrer"><b> Qiskit </b></a> (version 0.14.1) to replicate the results in the paper.
        </p>
        <p>
        Start to download <a href="https://www.anaconda.com/" target="_blank" rel="noopener noreferrer"> Anaconda</a> and execute the sh file.
        </p>
        <p>
        Then run the following command line.
        </p>    
        <div style= {{backgroundColor: `#263238`}}>
        <code style={{color:'white'}}> $ conda create -n name_of_my_env python=3 </code>
        <br/>
        <code style={{color:'white'}}> $ source activate name_of_my_env </code>
        <br/>
        <code style={{color:'white'}}> $ pip3 install -Iv qiskit==0.14.1 </code>
        </div>

        <br/>
        <p>
        To improve the quantum programs is essential to install <a href="https://github.com/Quantomatic/pyzx" target="_blank" rel="noopener noreferrer"><b> PyZX </b></a>. 
        Run the ensuing commands.
        </p>

        <div style= {{backgroundColor: `#263238`}}>
        <code style={{color:'white'}}> $ git clone "https://github.com/Quantomatic/pyzx.git" </code>
        <br/>
        <code style={{color:'white'}}> $ cd pyzx/ </code>
        <br/>
        <code style={{color:'white'}}> $ pip install -e . </code>
        </div>
        <br/>
        <p>Finally, install <a href="https://www.gnu.org/software/gawk/" target="_blank" rel="noopener noreferrer"><b>Gawk</b></a>.</p>

        <div style= {{backgroundColor: `#263238`}}>
        <code style={{color:'white'}}> $ sudo apt install gawk </code>
        </div>

        <br/>

        <h4>Experiment</h4>

        This paper applies the following tool-chain.

        <Figure>
          <Figure.Image
            src={toolchain}
          />
          <Figure.Caption>
            Tool-chain of the experience.
          </Figure.Caption>
        </Figure>

        <p>Consider the matrix of GHCi that already produced when defining the case study.</p>

        <p>Download the ensuing file to execute the Quipper section.</p>

        <ul><li><a href="../files/qfold_cnot_7x2_quipper.hs" target="_blank" rel="noopener noreferrer">Quipper File</a></li></ul>

        <p>Afterward, employ the instructions on the <a href="../files/qfold_cnot_7x2_quipper.hs" target="_blank" rel="noopener noreferrer">Quipper Instructions</a> link.</p>
        
        <p>The tool quipperToQiskit does not change the least significant bit with the most significant bit. Do this process manually and correct any inconsistencies. Then, convert the Quipper circuit into a Qiskit circuit by running the following command line.</p>

        <div style= {{backgroundColor: `#263238`}}>
        <code style={{color:'white'}}> $ awk -f quipperToQiskit.gawk circuit_cnot_7x2_quipper_A.txt > circuit_cnot_7x2_qiskit.txt </code>
        </div>
        <br/>
        
        <p>Use the following Jupyter File to execute all remaining sections.</p>


        <ul><li><a href="https://nbviewer.jupyter.org/github/AnaNeri/quantamorphismsGuide/blob/master/qfold_cnot_7x2_qiskit.ipynb" target="_blank" rel="noopener noreferrer">PyZX and Qiskit File</a></li></ul>

        <br/>
    	</Col>
    	</Row>
    	</Col>
    	</Row>
    	</Container>
    </div>
  );
}

function ReplicationPackage() {
  return (
    <div>
      <div style= {{ backgroundImage: `url(${Background})`}}>
      <center><h1><br/><br/> 
      Replication Package 
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

export default ReplicationPackage;
