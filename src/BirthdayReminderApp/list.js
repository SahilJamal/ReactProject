import React from 'react'

const List = ({info, upcoming}) => {
    console.log(info);
  return (
      <ul>
        <ul>
          {iterate(info, upcoming)}
      </ul>
      </ul>
  )
}

function iterate(data, flag){
    if (!data) return;
    const bgColor = flag ? { backgroundColor : "#ffe66d"} : {};
    return (
        <>
            {
                data.map( (person, index) => {
                   
                    return (
                        <li key={index}>
                            <div className="flex" style={bgColor}>
                                <img src={person.img} alt="img" />
                                <div className="title">
                                    <h3 className='name'>{person.name}</h3>
                                    <h5 className="age">{Old(person.birthday)} years</h5>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </>
    )
}

// how old the person is
function Old(personAge){
    let year = new Date(personAge).getFullYear();
    let currentYear = new Date().getFullYear();
    
    let age = currentYear - year;
   return age;
}

export default List
