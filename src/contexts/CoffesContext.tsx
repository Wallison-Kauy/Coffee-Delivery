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

export interface CoffesType {
  id: string;
  tags?: string[];
  titulo: string;
  resumo: string;
  price: number;
  count: number;
}

export interface CoffesProps extends CoffesType{
  addCount: (coffeId:string) => void;
  removeCount:(coffeId:string) => void;
}

interface CoffesContextType {
  coffes: CoffesType[];
  addCount: (coffeId:string) => void;
  removeCount:(coffeId:string) => void;
}

export const CoffesContext = createContext({} as CoffesContextType);

export function CoffesContextProviver({
  children,
}: CoffesContextProviderProps) {
  const [coffesState, dispatch] = useReducer(cyclesReducer,{
    coffes: [],
  })

  const {coffes} = coffesState;

  function removeCount(coffeId:string){
    removeCount(coffeId);
  }

  function addCount(coffeId:string){
    addCount(coffeId);
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
