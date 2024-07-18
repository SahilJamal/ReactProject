import React, { useRef, useState } from 'react'

function FromController() {

    // const object = {
    //     name:String,
    //     email:String
    // }

    const[nameData , setNameData] = useState('');
    const[emailData , setEmailData] = useState('');
    const [people , setPeople] = useState([]);
    const resetContainer = useRef(null);

    const handleSubmit =(e)=>{
        e.preventDefault();
            if(nameData&&emailData){
            const person = {id: new Date().getTime().toString(), nameData:nameData, emailData:emailData};
            setPeople((p)=>{return [...p,person]});
            console.log("Form Submitted Successfully");
            console.log(people);
            
            resetContainer.current.reset();

            }
            else{
            console.log("Enter both details to submit");
            }	
        }
    return(<>
    <form onSubmit={handleSubmit} ref={resetContainer}>
    <div>
    <label> Name </label>
    <input type="text" id="fname" name="fname"  onChange={(e)=>{setNameData(e.target.value)}}/>
    </div>
    <div>
    <label> Email </label>
    <input type="text" id="email" name="email"  onChange={(e)=>{setEmailData(e.target.value)}}/>
    </div>
    <button type="submit"> ADD </button>
    </form>

    {people.map((p)=>{
        const {id,nameData,emailData} = p;
	    return(<div key={id}>
			<h4> {nameData}       {emailData}</h4>
		</div>)
    })}

    </>
    )
}

export default FromController
