import React from "react"
import { createContext } from "react"
export const MyContext = createContext()

export const Context = ({ children }) => {
  return <MyContext.Provider value={{}}>{children}</MyContext.Provider>
}
