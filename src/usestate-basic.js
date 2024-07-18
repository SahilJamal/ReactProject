import React , {useEffect, useState} from 'react'
import {people} from './people';

var name = 'Sahil';

var flag = false;

var intervalId;

const UStateBasics = () => {

  const[size,setSize] = useState(window.innerWidth);

  const [timeCount,setTimeCount] = useState(0);

  const[count,setCount] = useState(0);

  useEffect(()=>{
    if(flag){
      flag = false;
      alert("deleted successfully");
    }else{
           intervalId = setInterval(() => {
            setTimeCount((timeCount) => timeCount + 1);
          }, 1000);
      window.addEventListener('resize',()=>{setSize(window.innerWidth)});
    }
    return ()=>{
      window.removeEventListener('resize',()=>{setSize(window.innerWidth)});
      clearInterval(intervalId);
    }
  },[flag]);


  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     // Increment the count value
  //     setTimeCount((timeCount) => timeCount + 1);
  //   }, 1000); // Update every 1000 milliseconds (1 second)

  //       // Cleanup the interval on unmount or when the component is removed
  //       return () => {
  //         clearInterval(intervalId);
  //       };
  //     }, [timeCount]);

  const [peoples,setPeople] = useState(people); 

  const [objects, setObject] = useState({
    id:1,name:'Sahil',message:'Hello'
  });

  const [croud,setCroud] = useState(people); 

  var [fName,setfName] = useState('Jamal');

  const removeItem = (id)=> {
    var person = croud.filter((person)=>{
      return person.id !== id;
    });
    setCroud(person);
  }

  const ChangeFName = (n) => {
      setfName('Loki')
      console.log(n);
  }

  const ChangeName = (n) => {
    n = "Mario";
    name = n;
    console.log(name);
}

const changeMsg =()=>{
  if(objects.message === 'Hello'){
    setObject({...objects,message:'Welcome Everyone!'});
  }else{
    setObject({...objects,message:'Hello'});
  }
  
  }

  return (
    <>
    {/* {console.log(useState('sahil'))} */}

    {peoples.map((person)=>{return <p>{person.name}</p>})}

    <button onClick={()=>{setPeople([]);flag=true}}>FlushFully</button>

    {croud.map((person)=>{return ( <div>

    <b>{person.name}</b>
    
    <button onClick={()=>{removeItem(person.id)}}>FlushOne</button> 

    </div>

    )})}



    <h1>{fName}</h1>
    <button onClick={() => {ChangeFName(fName)}}>Change FName UseState</button>
    <h1>{name}</h1>
    <button onClick={() => {ChangeName(name)}}>Change name Normal</button>

      <h1>{objects.id},{objects.name},{objects.message}</h1>
      {/* <button onClick={()=>{setObject({...objects,message:"Welcome"});}}>ChangeMessage</button> */}
      <button onClick={changeMsg}>ChangeMessage</button>

      <h1>Counter</h1>
      <h4>{count}</h4>
      <button onClick={()=>{setCount(count+1)}}>Increase</button>
      <button onClick={()=>{setCount(count-1)}}>Decrease</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
      <br/><br/>
      <h1>Time Counter</h1>
      <h4>{timeCount}</h4>
      {/* <button onClick={()=>{flag = true}}>Delete</button> */}
      {/*<button onClick={()=>{clearCounter()}}>Decrease</button>
      {/*<button onClick={()=>{setTimeCount(0)}}>Reset</button> */}
      <h1>Window Size</h1>
      {size}
    </>
      )
}
export default UStateBasics;
