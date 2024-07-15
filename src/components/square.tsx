import React from "react"

interface SquareProps {
  value: string | null
  onClick: () => void
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button
      className="square w-24 h-24 text-4xl font-bold border-2 border-gray-400"
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default Square
