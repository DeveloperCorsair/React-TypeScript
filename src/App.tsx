import { useState } from 'react'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React + TypeScript</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Botão de contar cliques acima!
      </p>
    </>
  )
}
