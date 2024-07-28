'use client'
import { createContext, useState, ReactNode, useEffect } from 'react'
import Cookies from 'js-cookie'

export const IsLoggedInContext = createContext<
  [boolean, (isLoggedIn: boolean) => void]
>([false, () => {}])

interface CustomProviderProps {
  children: ReactNode
}

export const CustomProvider: React.FC<CustomProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  useEffect(() => {
    ;(async () => {
      const response = await fetch('http://127.0.0.1:8000/api/user', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jwt: `${Cookies.get('jwt')}`,
        }),
      })
      const data = await response.json()
      if (!data.detail) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    })()
  }, [])

  return (
    <IsLoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      {children}
    </IsLoggedInContext.Provider>
  )
}
