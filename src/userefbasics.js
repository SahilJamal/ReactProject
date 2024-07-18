import React, { useEffect, useRef } from 'react'

function RefBasics() {

    const refContainer = useRef(null);
    const divContainer = useRef(null);
    const newContainer = useRef(null);
    const focusContainer = useRef(null);


    const setRefs = (element) =>{
        refContainer.current = element;
        focusContainer.current = element;
    }

    useEffect(()=>{

        newContainer.current.focus();

         // Now you can use refContainer and focusContainer to access the same element

        // if (refContainer.current) {
        //     refContainer.current.style.border = '1px solid red';
        //     refContainer.current.focus();
        // }
    },[])

    const handleForm = (e) =>{
        e.preventDefault();
        console.log(refContainer.current.value);
        console.log(newContainer.current.value)
        console.log(divContainer.current.id);
    }

  return (
    <div>
      
    <form onSubmit={handleForm}>
        <input type='text' ref={setRefs} />

        <input type='text' ref={newContainer} />

        <button type='submit'>Submit</button>
    </form>

    <div ref={divContainer} id='div'>
        welcome
    </div>

    </div>
  )
}

export default RefBasics;
