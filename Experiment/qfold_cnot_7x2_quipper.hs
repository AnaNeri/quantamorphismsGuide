import System.Exit

import Quipper
import Quipper.Internal

import Quantum.Synthesis.Matrix
import Quantum.Synthesis.Ring
import QuipperLib.Synthesis

import QuipperLib.Decompose.GateBase
import QuipperLib.Decompose

import Data.Complex
import Data.Ratio
import Data.Tuple

import Libraries.RandomSource

-- import modules for simulations
import qualified Data.Map as Map
import QuipperLib.Simulation
import System.Random
import Control.Monad (replicateM)

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

-- simulate function
simulate :: Circ ([Bit],Bit) -> IO ()
simulate circuit = print (sim_generic (1.0::Float) circuit)

main1 :: IO ()
main1 = do
  print_generic Preview (circuit_function my_oracle)
    where
   -- declare empty_oracle's data type
   my_oracle :: Oracle
   my_oracle = Oracle {
     -- set the length of qubit string
      qubit_num = 3,
      function = circuit
   }
 -- print mymatrix 

main2 :: IO ()
main2 = do
  print_generic ASCII (circuit_function my_oracle)
    where
   -- declare empty_oracle's data type
   my_oracle :: Oracle
   my_oracle = Oracle {
     -- set the length of qubit string
      qubit_num = 3,
      function = circuit
   }

main3 :: IO ()
main3 = do 
  simulate (circuit_function my_oracle)
  where
   -- declare empty_oracle's data type
   my_oracle :: Oracle
   my_oracle = Oracle {
     -- set the length of qubit string
      qubit_num = 3,
      function = circuit
   }

main4 :: IO ()
main4 = do
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

main5 :: IO ()
main5 = do
  print_generic ASCII (circuit_function my_oracle)
    where
   -- declare empty_oracle's data type
   my_oracle :: Oracle
   my_oracle = Oracle {
     -- set the length of qubit string
      qubit_num = 3,
      function = circuit_decompose
   }

main6 :: IO ()
main6 = do 
  simulate (circuit_function my_oracle)
  where
   -- declare empty_oracle's data type
   my_oracle :: Oracle
   my_oracle = Oracle {
     -- set the length of qubit string
      qubit_num = 3,
      function = circuit_decompose
   }

main = do 
  putStrLn "\n \n choose an option:"
  putStrLn " 1 - PDF original circuit\n"
  putStrLn " 2 - text description of original circuit\n"
  putStrLn " 3 - original simulation\n"
  putStrLn " 4 - PDF decomposed circuit\n"
  putStrLn " 5 - text description of decomposed circuit\n"
  putStrLn " 6 - simulation of the decomposed circuit \n"
  putStrLn " 7 - exit\n"
  line <- getLine
  case line of
    "1" -> do main1
              main
    "2" -> do main2
              main
    "3" -> do main3
              main
    "4" -> do main4
              main
    "5" -> do main5
              main
    "6" -> do main6
              main
    "7" -> do exitSuccess
    _ -> do main

  -- if you want the circuit description a .txt file 
  -- comment the menu above 
  -- replacing it by:
  -- main2
  -- and run:
  -- $ ./qfold_cnot_7_x_2 > matrix_cnot_7_x_2_quipper.txt 

   -- with a real quantum computer, when we terminate a qubit with an
   -- assertion we have no way of actually checking the assertion. The
   -- best we can do is measure the qubit and then throw an error if
   -- the assertion is incorrect, which may only occur with a small
   -- probability. Here, we could split the quantum state and see if
   -- the qubit exists in the incorrect state with any non-zero
   -- probability, and throw an error. However, we don't do this
   -- because an error would sometimes be thrown due to rounding.

   -- from https://github.com/silky/quipper/blob/master/QuipperLib/Simulation/QuantumSimulation.hs