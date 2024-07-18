import React, { useContext } from 'react'
import { Container } from './reducer-counter'

const AComponent = () => {

    const {state,dispatcher} = useContext(Container);

    function add(){
        dispatcher('add');
    }

    function sub(){
        dispatcher('sub');
    }

  return (
    <div>
      <h1>This is AComponent</h1>
      <button onClick={()=>{
        add()
      }}>Add</button>
      {state.count}
      <button onClick={()=>{
        sub()
      }}>Sub</button>
    </div>
  )
}

export default AComponent
