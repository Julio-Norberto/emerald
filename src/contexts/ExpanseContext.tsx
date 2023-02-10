import { createContext } from "react";
import { useExpanse } from "../hooks/useExpanse.js";

interface IExpanseContext {
  registerExpanse: (amount: string, expanseType: 'entrada' | 'saida', expanseCategory: string, date: string, description: string) => Promise<void>
  change: boolean
}

export const Context = createContext({} as IExpanseContext)

export const ExpanseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { change, registerExpanse } = useExpanse()

  return <Context.Provider value={{ change, registerExpanse }}> {children} </Context.Provider>
}
