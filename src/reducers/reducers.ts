import { CoffesType } from "./../contexts/CoffesContext";

export interface CoffeState {
  coffes: CoffesType[];
  coffeId: string | null;
}

export function coffeReducer(state: CoffeState, action: any) {
  switch (action.type) {
    case "REMOVE_COUNT_COFFE": {
      return {
        ...state,
        coffes: state.coffes.map((coffe) => {
          if (coffe.id === action.payload.coffeId && coffe.count > 0) {
            const newCount = coffe.count - 1;
            return { ...coffe, count: newCount, countTotal: Number((newCount*coffe.price).toFixed(2)) };
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
            const newCount = coffe.count + 1;
            return { ...coffe, count: newCount,countTotal: Number((newCount*coffe.price).toFixed(2)) };
          } else {
            return coffe;
          }
        }),
      };
    }
    case "REMOVE_CART": {
      return {...state,
        coffes: state.coffes.map((coffe) => {
          if(coffe.id === action.payload.coffeId){
            const newValueCount = 0;
              return {...coffe, count: newValueCount}
          }else{
            return coffe;
          }
        }),
      };
    }
    default:
      return state;
  }
}
