import { createContext } from "react";
import { useAuth } from "../hooks/useAuth";
import { IUser } from '../hooks/useAuth'

interface IUserContext {
  register: (user: IUser) => Promise<void>
}

export const Context = createContext({} as IUserContext)

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { register } = useAuth()

  return <Context.Provider value={{ register }}> {children} </Context.Provider>
}
