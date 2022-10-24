import { BUY_CAKE } from "./cakeTypes"

export const buyCake = (numberofcake = 1) => {
    return {
        type: BUY_CAKE,
        payload: numberofcake
    }
}

