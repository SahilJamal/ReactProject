import React,{ useReducer,useContext, createContext } from 'react'
import AComponent from './AComponent';
import BComponent from './BComponent';
import CComponent from './CComponent';

export const Container = createContext();

const ReducerCount1 = () => {

  const [ state , dispatcher ] = useReducer(reducer,{count:0});

  function add(){
    dispatcher('add');
  }

  function sub(){
    dispatcher('sub')
  }

  function reducer(currentstate , action){

    switch(action){
      case 'add':
        return {count:currentstate.count+1}

      case 'sub':
        return {count:currentstate.count-1};

      default:
        return {count:0}
    }

  }

  return (
    <div>
      
      <button onClick={()=>{
        add()
      }}>Add</button>
      {state.count}
      <button onClick={()=>{
        sub()
      }}>Sub</button>

      <Container.Provider value={{state,dispatcher}}>
        <AComponent />
        <BComponent />
        <CComponent />
      </Container.Provider>

    </div>
  )
}

export default ReducerCount1;