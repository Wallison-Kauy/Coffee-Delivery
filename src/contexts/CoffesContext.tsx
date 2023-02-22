import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";

interface CoffesContextProviderProps {
  children: ReactNode;
}

export interface Coffes {
  id: string;
  tags: string[];
  titulo: string;
  resumo: string;
  price: number;
  count: number;
}

interface CoffesContextType {
  //coffes: Coffes[];
  task: string;
}

export const CoffesContext = createContext({} as CoffesContextType);

export function CoffesContextProviver({
  children,
}: CoffesContextProviderProps) {
  const Coffes: Coffes[] = [];

  const task = "string";

  function aumentCount(id: string) {
    Coffes.map();
  }

  return (
    <CoffesContext.Provider
      value={{
        //coffes,
        task,
      }}
    >
      {children}
    </CoffesContext.Provider>
  );
}
