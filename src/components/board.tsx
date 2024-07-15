import { useState } from "react"
import Square from "@/components/square"
import { SquareValue } from "@/types"
import { calculateWinner } from "@/utils"

interface BoardProps {
  player1: string
  player2: string
  player1Piece: "X" | "O"
  onReset: () => void
}

const Board: React.FC<BoardProps> = ({
  player1,
  player2,
  player1Piece,
  onReset,
}) => {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState<boolean>(true)

  const handleClick = (index: number) => {
    const newSquares = squares.slice()
    if (calculateWinner(squares) || squares[index]) {
      return
    }
    newSquares[index] = isXNext
      ? player1Piece
      : player1Piece === "X"
      ? "O"
      : "X"
    setSquares(newSquares)
    setIsXNext(!isXNext)
  }

  const renderSquare = (index: number) => {
    return <Square value={squares[index]} onClick={() => handleClick(index)} />
  }

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = "Winner: " + (winner === player1Piece ? player1 : player2)
  } else if (squares.every(Boolean)) {
    status = "Draw"
  } else {
    status = "Next player: " + (isXNext ? player1 : player2)
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null))
    setIsXNext(true)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-2xl">{status}</div>
      <div className="grid grid-cols-3 gap-2">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="mt-4 flex space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={resetGame}
        >
          Restart Game
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={onReset}
        >
          Back to Setup
        </button>
      </div>
    </div>
  )
}

export default Board
