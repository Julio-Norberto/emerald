import { createContext } from "react";
import { useAuth } from "../hooks/useAuth";

interface IUserContext {
  register: (name: string, email: string, password: string, confirmPassword: string) => Promise<void>,
  login: (email: string, password: string) => Promise<void>,
  authenticated: boolean
}

export const Context = createContext({} as IUserContext)

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { register, authenticated, login } = useAuth()

  return <Context.Provider value={{ register, authenticated, login }}> {children} </Context.Provider>
}
