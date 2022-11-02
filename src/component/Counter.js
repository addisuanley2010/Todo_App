import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increament ,decreament, logged} from '../action/index.js'

function Counter() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)

  const dispatch = useDispatch()

  return (
    <div>
      counter {counter} 
      <br />
      <button onClick={() => { dispatch(increament()) }}>increament</button>
      <button onClick={() => { dispatch(decreament()) }}>decreament</button>
      <button onClick={() => { dispatch(logged()) }}>click</button>
       { (isLogged) ?
        <h4>this is true</h4>
       :<h4>this is false</h4>}
    </div>
  )
}

export default Counter