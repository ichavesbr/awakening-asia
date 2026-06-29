"use client"

type ErrorProps = {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <>
      <h1>Deu erro: {error.message}</h1>
      <button onClick={() => reset()}>Retry</button>
    </>
  )
}
  