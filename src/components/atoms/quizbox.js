export default function QuizBox({ children }) {
  return (
    <div>
      <div
        className="font-dark
       top-0 mb-4 mt-4 flex
       flex-col items-center overflow-hidden rounded-md bg-dark p-2 shadow-md
       "
      >
        <h1 className="text-primary">Trivia Questions</h1>
      </div>
      <div
        className="flexflex-col top-0  mb-4  justify-start overflow-hidden rounded-md bg-dark p-8
    text-primary shadow-md"
      >
        {children}
      </div>
    </div>
  )
}
