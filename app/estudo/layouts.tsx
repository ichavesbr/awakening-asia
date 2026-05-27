import { getUser } from "./getUser"
import UserProvider from "./user-provider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const userPromise = getUser() // Don't await

  return (
    <html>
      <body>
        <UserProvider userPromise={userPromise}>{children}</UserProvider>
      </body>
    </html>
  )
}
