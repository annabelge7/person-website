'use client'
import { useEffect, useState, useMemo } from 'react'

export default function TypingTitle() {
  const titles = useMemo(
    () => ['a software engineer.', 'an environmentalist.', 'a recent grad.'],
    [],
  )

  const [titleIndex, setTitleIndex] = useState(0)
  const [displayedTitle, setDisplayedTitle] = useState(titles[0]) // start with first title
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    console.log('test')
    let interval
    if (typing) {
      interval = setInterval(() => {
        if (displayedTitle.length < titles[titleIndex].length) {
          setDisplayedTitle(
            titles[titleIndex].substring(0, displayedTitle.length + 1),
          )
        } else {
          clearInterval(interval)
          setTimeout(() => setTyping(false), 1500)
        }
      }, 150)
    } else {
      interval = setInterval(() => {
        if (displayedTitle.length > 0) {
          setDisplayedTitle(
            titles[titleIndex].substring(0, displayedTitle.length - 1),
          )
        } else {
          clearInterval(interval)
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
          setTyping(true)
        }
      }, 80)
    }
    return () => clearInterval(interval)
  }, [titleIndex, typing, displayedTitle, titles])

  return (
    <div className="flex flex-col items-center text-dark">
      <p className="pt-2 text-5xl">
        Hi, my name is <span className="text-secondary">Annabel.</span>
      </p>
      <p className="pt-3 text-4xl">
        I&apos;m <span className="font-bold">{displayedTitle}</span>
      </p>
    </div>
  )
}
