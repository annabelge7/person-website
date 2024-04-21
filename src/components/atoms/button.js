'use client'
import { useState } from 'react'

export default function Button({ text, onClick, isSelected }) {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    console.log('Clicked:', text)
    setClicked(true)
    if (onClick) {
      onClick()
    }
  }

  return (
    <button
      className={`
        bg-dark 
        text-primary 
        hover:bg-accent 
        ${isSelected ? 'bg-accent' : 'bg-accent'}
        m-2 
        transform 
        rounded-md 
        p-2 
        shadow-lg 
        transition 
        duration-200 
        ease-in-out
      `}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}
