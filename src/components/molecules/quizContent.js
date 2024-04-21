'use client'

import { QuizBox, Button, QuizContainer } from '../atoms'
import { useEffect, useState } from 'react'
import { quiz } from '../../app/data'
import Quiz from '@/app/quiz/page'

const QuizContent = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [checked, setChecked] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })

  const { questions } = quiz
  const { question, answers, correctAnswer } = questions[activeQuestion]

  //select andn check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true)
    console.log(idx)
    // console.log(correctAnswer)
    // console.log(answer)
    setSelectedAnswerIndex(idx)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
      console.log('true')
    } else {
      setSelectedAnswer(false)
      console.log('false')
    }
  }

  //calculate score and increment to next question
  const nextQuestion = () => {
    console.log(result.score)
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          },
    )

    if (activeQuestion < questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
      setChecked(false)
    } else {
      setShowResult(true)
    }
  }

  return (
    <div>
      <QuizBox>
        <h1 className="font-dark bg-primary"></h1>
        <div>
          <div>
            <h2>
              Question: {activeQuestion + 1}
              <span>/{questions.length}</span>
            </h2>
          </div>
          <div>
            {!showResult ? (
              <div>
                <QuizContainer>
                  <h3>{questions[activeQuestion].question}</h3>
                </QuizContainer>
                {answers.map((answer, idx) => (
                  <QuizContainer key={idx}>
                    <Button
                      text={answer}
                      onClick={() => onAnswerSelected(answer, idx)}
                      isSelected={selectedAnswerIndex === idx}
                    />
                  </QuizContainer>
                ))}
                {checked && (
                  <Button
                    text={
                      activeQuestion === questions.length - 1
                        ? 'Finish'
                        : 'Next'
                    }
                    onClick={nextQuestion}
                  />
                )}
              </div>
            ) : (
              <QuizContainer>
                <h3 className=" font-bold underline">Your Results:</h3>
                <h3>
                  Overall Score:{' '}
                  <span className="text-accent">
                    {(result.score / 50) * 100}%<span />
                  </span>
                </h3>
                <p>
                  Total Questions:{' '}
                  <span className="text-accent">{questions.length}</span>
                </p>
                <p>
                  Total Score:{' '}
                  <span className="text-accent">{result.score}/50</span>
                </p>
                <p>
                  Correct Answers:{' '}
                  <span className="text-accent">{result.correctAnswers}</span>
                </p>
                <p>
                  Wrong Answers:{' '}
                  <span className="text-accent">{result.wrongAnswers}</span>
                </p>
                <Button
                  text={'Play Again'}
                  onClick={() => window.location.reload()}
                >
                  {' '}
                </Button>
              </QuizContainer>
            )}
          </div>
        </div>
      </QuizBox>
    </div>
  )
}

export default QuizContent
