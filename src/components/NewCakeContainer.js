import React, {useState} from 'react'
import { connect } from 'react-redux'
import {buyCake} from '../redux'


function NewCakeContainer(props) {

    const [numberofcake, setnumberofcake] = useState(1)

  return (
    <div>
        <h2> Numbers of cakes - {props.numOfCakes}</h2>
        <input type='text' value={numberofcake} onChange={e => setnumberofcake(e.target.value)}></input>
        <button onClick={()=>props.buyCake(numberofcake)}> Buy {numberofcake} Cake </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchProps = dispatch => {
  return {
    buyCake: (numberofcake)=> dispatch(buyCake(numberofcake))
  }
}

export default connect (mapStateToProps, mapDispatchProps) (NewCakeContainer)