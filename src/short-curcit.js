
import React, {useState} from 'react';

const ShortCircuit = () =>{
const [text1,setText1] = useState('text');
const [text2,setText2] = useState('Hello');
const orCircuit = text1 || text2; // 0 ,false, '' same
const[text3 , setText3] = useState('text');
const[text4 , setText4] = useState('Welcome');

const andCircuit = text3 && text4; //here it includes 0 to as a value but not false '' // in adn only second data will dispaly and even if first is true
return <h1> OrCircuit:{orCircuit} AndCircuit:{andCircuit}</h1>
}

export default ShortCircuit;