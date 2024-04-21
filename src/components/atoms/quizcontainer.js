export default function QuizContainer({ children }) {
  return (
    <div
      className="font-dark mt-2 flex flex-col justify-start overflow-hidden rounded-md
      bg-extra p-4 shadow-md"
    >
      {children}
    </div>
  )
}
