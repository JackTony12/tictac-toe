import React from "react"
import { useState } from "react"
import { Squares } from "./squares"
import "../App.css"
import Swal from "sweetalert2"

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const hasNull = squares.some((square) => square !== null)
  const handleSquare = (i) => {
    const nextSquare = squares.slice()
    if (squares[i] || calculateWinner(squares)) {
      return
    }
    if (xIsNext) {
      nextSquare[i] = "X"
      setXIsNext(!xIsNext)
    } else {
      nextSquare[i] = "O"
      setXIsNext(!xIsNext)
    }
    setSquares(nextSquare)
  }

  const winner = calculateWinner(squares)

  if (winner) {
    Swal.fire({
      title: `El ganador es ${winner}`,
    })
  } else if (squares.every((square) => square !== null)) {
    Swal.fire({
      title: "Nadie ha ganado",
    })
  }

  const handleClearBoard = () => {
    setSquares(Array(9).fill(null))
  }
  const handleChangePlayer = () => {
    if (!hasNull) {
      setXIsNext(!xIsNext)
    } else {
      Swal.fire({
        title: "No puedes cambiar cuando ha iniciado la partida",
        icon: "warning",
      })
    }
  }
  return (
    <>
      <div className='board-container'>
        <h1 style={{ color: "#2e2e2e" }}>Tic Tac Toe</h1>
        <div className='board-row'>
          <Squares value={squares[0]} clickSquare={() => handleSquare(0)} />
          <Squares value={squares[1]} clickSquare={() => handleSquare(1)} />
          <Squares value={squares[2]} clickSquare={() => handleSquare(2)} />
        </div>
        <div className='board-row'>
          <Squares value={squares[3]} clickSquare={() => handleSquare(3)} />
          <Squares value={squares[4]} clickSquare={() => handleSquare(4)} />
          <Squares value={squares[5]} clickSquare={() => handleSquare(5)} />
        </div>
        <div className='board-row'>
          <Squares value={squares[6]} clickSquare={() => handleSquare(6)} />
          <Squares value={squares[7]} clickSquare={() => handleSquare(7)} />
          <Squares value={squares[8]} clickSquare={() => handleSquare(8)} />
        </div>
      </div>
      <div className='buttons'>
        <button className='play-btn' onClick={handleClearBoard}>
          Jugar de nuevo
        </button>
        <button onClick={handleChangePlayer} className='play-btn'>
          <svg
            stroke='currentColor'
            fill='currentColor'
            stroke-width='0'
            viewBox='0 0 24 24'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path fill='none' d='M0 0h24v24H0z'></path>
            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.17-5.24-1.1-1.1c.71-1.33.53-3.01-.59-4.13A3.482 3.482 0 0 0 12 8.5c-.03 0-.06.01-.09.01L13 9.6l-1.06 1.06-2.83-2.83L11.94 5 13 6.06l-.96.96c1.27.01 2.53.48 3.5 1.44 1.7 1.71 1.91 4.36.63 6.3zm-1.28 1.41L12.06 19 11 17.94l.95-.95a4.97 4.97 0 0 1-3.48-1.46 5.006 5.006 0 0 1-.64-6.29l1.1 1.1c-.71 1.33-.53 3.01.59 4.13.7.7 1.63 1.04 2.56 1.01L11 14.4l1.06-1.06 2.83 2.83z'></path>
          </svg>
        </button>
        <span>{xIsNext ? "X" : "O"}</span>
      </div>
      <a target='_blank' href='https://antonyleon.com'>
        antonyleon.com
      </a>
    </>
  )
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
export default Board
