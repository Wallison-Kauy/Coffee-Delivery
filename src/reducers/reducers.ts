import { CoffesType } from "./../contexts/CoffesContext";

export interface CoffeState {
  coffes: CoffesType[];
  coffeId: string | null;
}

export function coffeReducer(state: CoffeState, action: any) {
  console.log("OBJETO QUE CHEGOU", state, action);
  console.log("cegou no reducer é o id é -----> id é:", action.payload.coffeId);
  switch (action.type) {
    case "REMOVE_COUNT_COFFE": {
      return {
        ...state,
        coffes: state.coffes.map((coffe) => {
          if (coffe.id === action.payload.coffeId && coffe.count > 0) {
            return { ...coffe, count: coffe.count - 1 };
          } else {
            return coffe;
          }
        }),
      };
    }
    case "ADD_COUNT_COFFE": {
      return {
        ...state,
        coffes: state.coffes.map((coffe) => {
          if (coffe.id === action.payload.coffeId) {
            return { ...coffe, count: coffe.count + 1 };
          } else {
            return coffe;
          }
        }),
      };
    }
    default:
      return state;
  }
}
