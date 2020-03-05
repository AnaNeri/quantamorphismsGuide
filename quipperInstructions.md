# Quipper Instructions

`qfold_cnot_7x2_quipper.hs` starts with a list of required imports. Note in previous versions of Quipper the list of imports would be slightly different, the functions employed are the same regardless.

The quantum circuit compresses optional initial quantum states, the oracle, and the measurement gates. 

The matrix information serves to establish the oracle, with one target and three controls.

The decomposition can be achieved with the function `decompose_generic`. 

To test the original circuit and the decompose one comment the `main_qfold_cnot_7x2`, uncomment the `main_menu`, and run the following command lines.
 
```
$ quipper qfold_cnot_7x2_quipper.hs
$ ./qfold_cnot_7x2_quipper
```

To retrieve the description in a text file, comment the `main_menu`, uncomment the `main_qfold_cnot_7x2`, and run the ensuing command lines.

```
$ quipper qfold_cnot_7x2_quipper.hs
$ ./qfold_cnot_7x2_quipper > circuit_cnot_7x2_quipper.txt 
```