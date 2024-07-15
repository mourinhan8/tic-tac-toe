"use client"
import React, { useState } from "react"

interface PlayerSetupProps {
  onSetupComplete: (
    player1: string,
    player2: string,
    player1Piece: "X" | "O"
  ) => void
}

const PlayerSetup: React.FC<PlayerSetupProps> = ({ onSetupComplete }) => {
  const [player1, setPlayer1] = useState("")
  const [player2, setPlayer2] = useState("")
  const [player1Piece, setPlayer1Piece] = useState<"X" | "O">("X")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (player1 && player2 && player1 !== player2) {
      onSetupComplete(player1, player2, player1Piece)
    } else {
      alert("Please enter different names for both players.")
    }
  }

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2" htmlFor="player1">
          Player 1 Name:
        </label>
        <input
          type="text"
          id="player1"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
          className="p-2 text-black border border-gray-400 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2" htmlFor="player2">
          Player 2 Name:
        </label>
        <input
          type="text"
          id="player2"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
          className="p-2 text-black border border-gray-400 rounded"
        />
      </div>
      <div className="mb-4 flex flex-col items-center">
        <div>
          <label className="block text-lg font-medium mb-2">
            Player 1 Piece:
          </label>
        </div>
        <div>
          <select
            value={player1Piece}
            onChange={(e) => setPlayer1Piece(e.target.value as "X" | "O")}
            className="p-2 text-black border border-gray-400 rounded"
          >
            <option value="X">X</option>
            <option value="O">O</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Start Game
      </button>
    </form>
  )
}

export default PlayerSetup
