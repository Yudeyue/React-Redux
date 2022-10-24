import { BUY_ICECREAM } from "./icecreamTypes"

const initialState = {
    numOfIcecream: 20
}

export const iceCreamReducer =  (state = initialState, { type, payload }) => {
  switch (type) {

  case BUY_ICECREAM:
    return { ...state, numOfIcecream: state.numOfIcecream - 1 }

  default:
    return state
  }
}
