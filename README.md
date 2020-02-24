# Quantamorphisms Guide

This Guide is indended to support the reading of sections 15 to 17 of paper *Compiling quantamorphisms for the IBM Q-Experience*. These address the use of a tool-chain leading to running quantum circuits generated from quantamorphism specifications on IBM Q-Experience devices.

### Prerequisites

Software required:
* Quipper (version 0.8)
* PyZX 
* QISKit (version 0.14) \*
* IBM-Q Experience account
* gawk (quipperToQiskit)

\* Qiskit may run in IBM-Q Experience without the need for installation. 

### Authors

* **Ana Neri** - [AnaNeri](https://github.com/AnaNeri)
* **José Nuno Oliveira** - [JoseNunoOliveira](https://github.com/JoseNunoOliveira)
* **Rui Soares Barbosa** - [ruisb](https://github.com/ruisb)

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

### Acknowledgments

We acknowledge the financial support by [INESC TEC](https://www.inesctec.pt/en#intro) and the opportunity granted by [QuantaLab](http://www.quantalab.org/) [IBM Q Academic Hub](https://www.ibm.com/quantum-computing/network/members/).

### Tool-chain

![alt text](../img/tool-chain.png)

### Experiment

* Start by loading and running source file qfold_cnot_7x2_quipper.hs (nb: quipper requires GHC 8.0 Note: GHC 7.10 is too broken and will not be supported by Quipper. ).

* Then do the same for jupyter notebook [fold_cnot_7x2_qiskit.ipynb](https://nbviewer.jupyter.org/github/AnaNeri/quantamorphismsGuide/blob/master/Experiment/qfold_cnot_7x2_qiskit.ipynb)


