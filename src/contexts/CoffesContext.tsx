import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import { coffeReducer } from "../reducers/reducers";

interface CoffesContextProviderProps {
  children: ReactNode;
}

export interface CoffesType {
  id: string;
  tags?: string[];
  titulo: string;
  resumo: string;
  price: number;
  count: number;
}
export interface CoffesProps extends CoffesType {
  addCount: (coffeId: string) => void;
  removeCount: (coffeId: string) => void;
}

interface CoffesContextType {
  coffes: CoffesType[];
  addCount: (coffeId: string) => void;
  removeCount: (coffeId: string) => void;
}

export interface CoffeState {
  coffes: CoffesType[];
  coffeId: string | null;
}

export const CoffesContext = createContext({} as CoffesContextType);

export function CoffesContextProviver({
  children,
}: CoffesContextProviderProps) {
  const [coffesState, dispatch] = useReducer(coffeReducer, {
    coffes: [],
    coffeId: null,
  });

  const { coffes } = coffesState;

  function removeCount(coffeId: string) {
    dispatch({
      type: "REMOVE_COU NT_COFFE",
      payload: {
        coffeId,
      },
    });
  }

  function addCount(coffeId: string) {
    dispatch({
      type: "ADD_COUNT_COFFE",
      payload: {
        coffeId,
      },
    });
  }

  return (
    <CoffesContext.Provider
      value={{
        coffes,
        removeCount,
        addCount,
      }}
    >
      {children}
    </CoffesContext.Provider>
  );
}
