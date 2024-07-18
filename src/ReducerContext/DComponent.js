import React, { useContext } from 'react'
import { Container } from './reducer-counter';

const DComponent = () => {

    const {state,dispatcher} = useContext(Container);

    function add(){
        dispatcher('add');
    }

    function sub(){
        dispatcher('sub');
    }


  return (
    <div>
        <h1>This is DComponent</h1>
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

export default DComponent
