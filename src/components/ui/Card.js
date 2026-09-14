export default function Card({ className = '', children }) {
  return (
    <div
      className={`rounded-2xl border border-line bg-paper p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-sage-light hover:shadow-[0_12px_28px_-16px_rgba(33,29,24,0.25)] ${className}`}
    >
      {children}
    </div>
  )
}
