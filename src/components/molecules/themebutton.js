'use client'
import { useState, useEffect } from 'react'
import { Button } from '../atoms'

const themes = ['', 'theme-Summer', 'theme-Winter', 'theme-Fall']

// I tried to write this funciton (following a video on youtube) but I couldn't seem to figure it out aka
// it wasnt sticking when I reloaded the page. it works when I navigate but not when reloading
// I would love some feedback on how to do this better/more efficiently!

function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(defaultValue) //defualt value

  useEffect(() => {
    // get valeu from local storage
    const stickyValue = window.localStorage.getItem(key)
    if (stickyValue !== null) {
      setValue(stickyValue)
    }
  }, [key])

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default function ThemeButton() {
  const [themeIndex, setThemeIndex] = useStickyState(0, 'themeIndex')

  useEffect(() => {
    const themeClass = themes[themeIndex]
    document.documentElement.className = themeClass
  }, [themeIndex])

  const changeTheme = () => {
    const nextThemeIndex = (themeIndex + 1) % themes.length
    setThemeIndex(nextThemeIndex)
  }

  const buttonText = themes[themeIndex]
    ? themes[themeIndex].substring(6)
    : 'Spring'

  return <Button onClick={changeTheme} text={buttonText} />
}
