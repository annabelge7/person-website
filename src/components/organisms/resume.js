'use client'
import React, { useState, useEffect } from 'react'

const Resume = () => {
  const resumeUrl = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/AnnabelEdward_Resume2024.pdf`
  const [isSmallScreen, setisSmallScreen] = useState(false)

  //this function checks every time the user changes the window size so whenever
  //they change the size of window it runs sets isSmallScreen to true or false
  useEffect(() => {
    function handleResize() {
      setisSmallScreen(window.innerWidth <= 600)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="m-20 w-3/4 overflow-hidden">
      {isSmallScreen ? (
        <div className="h-screen min-h-[500px] w-full">
          <p className="p-4 text-sm text-gray-700">
            Use device with larger screen or click here to see{' '}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent visited:text-secondary hover:text-accent"
            >
              my resume
            </a>{' '}
            in a new window.
          </p>
        </div>
      ) : (
        <object
          data={resumeUrl}
          className="h-screen min-h-[500px] w-full"
          aria-label="Resume PDF viewer"
        ></object>
      )}
    </div>
  )
}

export default Resume
