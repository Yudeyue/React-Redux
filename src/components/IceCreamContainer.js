import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyIcecream } from '../redux'

function IceCreamContainer() {

    const numOfIcecream = useSelector(state=> state.iceCream.numOfIcecream)
    const dispatch = useDispatch()

  return (
    <div>
        <h2>Number of iceCream - {numOfIcecream}</h2>
        <button onClick={()=> dispatch(buyIcecream())}> BUY_ICECREAM</button>
    </div>
  )
}

export default IceCreamContainer