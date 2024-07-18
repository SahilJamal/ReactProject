import React, { useEffect, useState } from 'react'
import './github.css'

const Github = () => {

    const[users , setUsers] = useState([]);
    const [search , setSearch] = useState('');
    const [result , setResult] = useState(null);
    const [error , setError] = useState(false);
    const getUsers = async() =>{
        const responce = await fetch('https://api.github.com/users');
        const data = await responce.json();
        setUsers(data);
    }

    useEffect(()=>{
        getUsers();
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();

        var newResult = users.find((p)=>{return p.login === search});

        if(newResult){
            setResult(newResult);
            setError(false);
        }else{
            setError(true);
        }
    }

  return (
    <div>

        <form onSubmit={handleSubmit}>
            <input type='text' name='search' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
            <button type='submit'>search</button>
        </form>

        {result&&<SerachedData result={result}/>}
        {error&&<h1>Not found</h1>}

        {
        users.map((data)=>{
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


const SerachedData = ({result}) => {

        const {login,html_url,avatar_url} = result;

    return (<>

            <div className='card'>
                    <img src={avatar_url} alt='not found'/>
                    <div className='container'>
                    <a  href={html_url} target='_blank'><h1>{login}</h1></a>
                    </div>
                </div>
    </>)
}

export default Github
