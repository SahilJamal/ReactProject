import React, { useContext } from 'react'
import { Container } from './reducer-counter';

const FComponent = () => {

    const {state,dispatcher} = useContext(Container);

    function add(){
        dispatcher('add');
    }

    function sub(){
        dispatcher('sub');
    }

  return (
    <div>
        <h1>This is FComponent</h1>
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

export default FComponent
