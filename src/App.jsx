import './App.css'
import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinner, checkEndGame } from './logic/board.js'
import { Board } from './components/Board.jsx'

function App() {
  // const board = Array(9).fill(null) Cuando las constantes están dentro de la función, se actualizarán con los cambios de state u otros
  const [board, setBoard] = useState(Array(9).fill(null)) // Este es el tablero

  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null) // null es que no hay ganador y false es que hay empate. True es que hay ganador

  // Resetear el juego estableciendo los valores a su por defecto
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    // Verificar que en esa opsición no haya algo
    if(board[index] || winner) return

    // Modificar/Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Modificar el turno actual
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Revisar si existe un ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
      <Board board={board} updateBoard={updateBoard} turn={turn} winner={winner} resetGame={resetGame} />
  )
}

export default App
