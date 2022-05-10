import React, { useState} from "react";
import {Input} from 'reactstrap';
import '../App.css';
import {totalSwing} from "./Data";

const PlayerName=(props)=>{
let number=props.playerValue
const[name,setName]=useState()
function handleChangeName(e) {
  setName(e.target.value)
  console.log(e.target.value)
  totalSwing[number].player=e.target.value
    }

return(
        <Input type="text" placeholder={props.defaultValue} onChange={(e)=>handleChangeName(e)} value={name}>{name}</Input>
)
}
export default PlayerName;