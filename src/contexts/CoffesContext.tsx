import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import { coffeReducer } from "../reducers/reducers";
import { CoffesData } from "./data";

interface CoffesContextProviderProps {
  children: ReactNode;
}

export interface CoffesType {
  id: string;
  tags: string[];
  titulo: string;
  resumo: string;
  price: number;
  count: number;
  img: string;
  isShopPage?: boolean;
  countTotal?: number;
}
export interface CoffesProps extends CoffesType {
  addCount: (coffeId: string) => void;
  removeCount: (coffeId: string) => void;
}

interface CoffesContextType {
  coffes: CoffesType[];
  addCount: (coffeId: string) => void;
  removeCount: (coffeId: string) => void;
  qtdCoffesCount: CoffesType[];
  total: number;
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
    coffes: CoffesData,
    coffeId: "",
  });

  const { coffes,coffeId } = coffesState;

  const qtdCoffesCount = coffes.filter((coffee) => coffee.count > 0);

  const total = coffes.reduce((accumulator, coffe) => accumulator + (coffe.count * coffe.price), 0);


  function removeCount(coffeId: string) {
    dispatch({
      type: "REMOVE_COUNT_COFFE",
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
        qtdCoffesCount,
        total,
      }}
    >
      {children}
    </CoffesContext.Provider>
  );
}