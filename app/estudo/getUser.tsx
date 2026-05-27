import { cache } from "react"

export const getUser = cache(async () => {
  const res = await fetch("https://api.example.com/user")
  return res.json()
})
