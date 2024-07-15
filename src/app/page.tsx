"use client"

import React, { useState } from "react"
import PlayerSetup from "@/components/playerSetup"
import Board from "@/components/board"

const Home: React.FC = () => {
  const [player1, setPlayer1] = useState<string | null>(null)
  const [player2, setPlayer2] = useState<string | null>(null)
  const [player1Piece, setPlayer1Piece] = useState<"X" | "O">("X")

  const handleSetupComplete = (
    player1: string,
    player2: string,
    player1Piece: "X" | "O"
  ) => {
    setPlayer1(player1)
    setPlayer2(player2)
    setPlayer1Piece(player1Piece)
  }

  const handleReset = () => {
    setPlayer1(null)
    setPlayer2(null)
    setPlayer1Piece("X")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Tic Tac Toe</h1>
      {player1 && player2 ? (
        <Board
          player1={player1}
          player2={player2}
          player1Piece={player1Piece}
          onReset={handleReset}
        />
      ) : (
        <PlayerSetup onSetupComplete={handleSetupComplete} />
      )}
    </div>
  )
}

export default Home
