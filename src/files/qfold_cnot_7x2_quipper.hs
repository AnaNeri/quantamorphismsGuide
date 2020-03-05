import System.Exit

import Quipper
import Quipper.Internal

import Quantum.Synthesis.Matrix
import Quantum.Synthesis.Ring
import Quipper.Libraries.Synthesis

import Quipper.Libraries.Decompose.GateBase
import Quipper.Libraries.Decompose

import Data.Complex
import Data.Ratio
import Data.Tuple

import Quipper.Utils.RandomSource
import System.Random

-- declare sample_oracle's data type
data Oracle = Oracle {
   qubit_num :: Int,
   function :: ([Qubit], Qubit) -> Circ ([Qubit], Qubit)
}

-- declare circuit function
circuit_function :: Oracle -> Circ ([Bit], Bit)
circuit_function oracle = do
     -- initialize string of qubits
     top_qubits <- qinit (replicate (qubit_num oracle) False)
     bottom_qubit <- qinit False
     label (top_qubits, bottom_qubit) ("|0>","|0>")

     --prepare the initial states
     --mapUnary hadamard top_qubits
     --mapUnary hadamard bottom_qubit
     
     comment "before oracle"
     -- call oracle
     function oracle (top_qubits, bottom_qubit)
     comment "after oracle"
     
     -- measure qubits
     (top_qubits, bottom_qubit) <- measure (top_qubits, bottom_qubit)
     -- discard unnecessary output and return result
     return (top_qubits, bottom_qubit)


-- * From a matrix
type Sixteen = Ten_and Six

mymatrix :: Matrix Sixteen Sixteen (Integer)
mymatrix = matrix [[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], -- ([],0)
                   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], -- ([],1)
                   [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], -- ([0],0)
                   [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], -- ([0],1)
                   [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], -- ([0,0],0)
                   [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], -- ([0,0],1)
                   [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], -- ([1,0],0)
                   [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], -- ([1,0],1)
                   [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], -- ([1],0)
                   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], -- ([1],1)
                   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], -- ([0,1],0)
                   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], -- ([0,1],1)
                   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], -- ([1,1],0)
                   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], -- ([1,1],1)
                   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], -- ([0,0,0],0)
                   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]] -- ([0,0,0],1)

synthesized = exact_synthesis mymatrix

circuit ::([Qubit], Qubit)-> Circ ([Qubit], Qubit)
circuit ([a, b, c], d) = do
  synthesized [a,b,c,d]
  return ([a,b,c],d)

-- Standard decompose in X, Y , Z, H , S, S*, T, T* and CNOT
-- needs : precision and randomSource
rand = RandomSource(fst(split(mkStdGen 10)))
prec = 20 * bits
circuit_decompose = decompose_generic (Standard prec rand) circuit


--
original_pdf :: IO ()
original_pdf = do
  print_generic Preview (circuit_function my_oracle)
    where
    -- declare empty_oracle's data type
    my_oracle :: Oracle
    my_oracle = Oracle {
    -- set the length of qubit string
        qubit_num = 3,
        function = circuit
    }

-- 
original_ASCII :: IO ()
original_ASCII = do
  print_generic ASCII (circuit_function my_oracle)
    where
     -- declare empty_oracle's data type
     my_oracle :: Oracle
     my_oracle = Oracle {
      -- set the length of qubit string
       qubit_num = 3,
       function = circuit
     }


decompose_pdf :: IO ()
decompose_pdf = do
  print_generic Preview (circuit_function my_oracle)
    where
   -- declare empty_oracle's data type
   my_oracle :: Oracle
   my_oracle = Oracle {
     -- set the length of qubit string
      qubit_num = 3,
      function = circuit_decompose
   }
 -- print mymatrix 

decompose_ASCII :: IO ()
decompose_ASCII = do
  print_generic ASCII (circuit_function my_oracle)
    where
   -- declare empty_oracle's data type
   my_oracle :: Oracle
   my_oracle = Oracle {
     -- set the length of qubit string
      qubit_num = 3,
      function = circuit_decompose
   }


main_menu = do 
  putStrLn "\n \n \n \n \n \n \n \n choose an option:"
  putStrLn " 1 - PDF original circuit\n"
  putStrLn " 2 - text description of original circuit\n"
  putStrLn " 3 - PDF decomposed circuit\n"
  putStrLn " 4 - text description of decomposed circuit\n"
  putStrLn " 5 - exit\n"
  line <- getLine
  case line of
    "1" -> do original_pdf
              main
    "2" -> do original_ASCII
              main
    "3" -> do decompose_pdf
              main
    "4" -> do decompose_ASCII
              main
    "5" -> do exitSuccess
    _ -> do main

main_qfold_cnot_7x2 = do
  decompose_ASCII

main = do
  --main_menu

  -- or
  -- if you want the circuit description a .txt file 
  -- comment the main_menu above 
  -- replacing it by:

  main_qfold_cnot_7x2

  -- and run:
  -- $ ./qfold_cnot_7x2_quipper > circuit_cnot_7x2_quipper.txt  