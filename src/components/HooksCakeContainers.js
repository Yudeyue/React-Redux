import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainers() {

    const numberOfCakes = useSelector(state=> state.cake.numOfCakes)
    const dispatch = useDispatch()

  return (
    <div>
        <h2>
            Numbers of cakes------{numberOfCakes}
        </h2>
        <button onClick={()=> dispatch(buyCake())}>
            Click to buy a cake
        </button>
    </div>
  )
}

export default HooksCakeContainers