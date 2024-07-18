import React , {useContext}from 'react'
import {PeopleContext} from './context-api';

const PersonInfo = () =>{

    const data  = useContext(PeopleContext);

    return (
        <>
        <h1>Hello from consumer</h1>
        {data.data.map((data)=>{
            return <Show {...data} key={data.id} />
        })}        
        </>
    )
}

const Show = ({id,name,removeItem})=>{

    const data  = useContext(PeopleContext);

    return (<>

        <h4>{id}</h4>
        <p>{name}</p>
        <br/>
        <button onClick={()=>{data.removeItem(id)}}>Delete</button>
        
    </>)

}

export default PersonInfo;
