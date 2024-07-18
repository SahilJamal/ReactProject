import React, { useEffect, useState } from 'react';

const MultipleReturns =()=>{
const [isLoading, setIsLoading]=useState(false);
const[isData , setIsData] = useState(false);
const[users , setUsers] = useState([]);
const[isError , setIsError] = useState(false);

    useEffect(()=>{
        fetch('https://api.github.com/users').then( 
            (responce)=>{
                if((responce.status >= 200) && (responce.status <=299)){
                    setIsLoading(true);
                    return responce.json();
                }else if(responce.status === 401){
                    setIsLoading(false);
                    setIsData(false);
                    setIsError(true);
                }
            }
            ).then(
                (data)=>{
            setUsers(data);
            setIsData(true);
            setIsLoading(false);
        }
        ).catch((err)=>{console.log(err);})
    },[]);

if(isLoading){
	return <h2> Loading... </h2>
}

if(isData){
    return (
        <div>
        {users.map((data)=>{
            const {id,login,html_url,avatar_url} = data;
            return (
                <div key={id} className='card'>
                    <img src={avatar_url} alt='not found'/>
                    <div className='container'>
                    <a  href={html_url} target='_blank'><h1>{login}</h1></a>
                    </div>
                </div>
            )
        })}
    </div>
    ) 
}
if(isError){
return <h2> Not Loading </h2>
}

return <h1>Something went Wrong</h1>

}

export default MultipleReturns;
