export default function Input({ type, value, handleChange }) {
  return (
    <div>
      {type === 'text' && (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="ml-4 mr-4 w-5/6 rounded-lg bg-primary p-4 pl-4 shadow-2xl"
        />
      )}
      {type === 'textarea' && (
        <textarea
          value={value}
          onChange={handleChange}
          className=" ml-4 mr-4 h-28 w-5/6 rounded-lg bg-primary p-4 pl-4 shadow-2xl"
        />
      )}
    </div>
  )
}
