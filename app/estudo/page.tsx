"use client"

import { use, useContext } from "react"
import { UserContext } from "./user-provider"

export default function Profile() {
  const userPromise = useContext(UserContext)
  if (!userPromise) {
    throw new Error("useContext must be used within a UserProvider")
  }
  const user = use(userPromise)
  return <p>Welcome, {user.name}</p>
}
