import React from "react";
import {Input, Col, Row,Container} from 'reactstrap';
import '../App.css';
import {Drive,Patt,totalSwing} from "./Data";

const HoleCount=(props)=>{
 
  const [state, setState] = React.useState({
    par:[],
    drive:[],
    putt:[],
  })
function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
    console.log("test",evt.target.value);
  }
let puttScore=0
if (isNaN(state.putt)==true){puttScore=1}
else{puttScore=Number(state.putt)}
let total=0
if(props.driveValue==0){ total = Number(state.drive)+Number(puttScore)}
else { total=Number(props.driveValue)+Number(props.puttValue)}
let score = 0
if (Number(total-props.parValue)<=-2){
  score = 8;
}else if (Number(total-props.parValue)==-1){
  score = 4;
}else if (Number(total-props.parValue)===0){
  score = 2;
}else {
  score = 0;}
let extra = 0
/*if (state.putt==="1a"){
  extra=4
}else if (state.putt==="1b"){
  extra=3;
}else if (state.putt==="1c"){
  extra=2;
}else if (state.putt==="1d"){
  extra=1;
}else if (state.putt==="0"){
  extra=5;}
  else {extra=0;}*/
let bonus=0
let totalScore= Number(score)+Number(bonus)
if (state.drive<1){totalScore=null}
function updateSwing(array, index, newValue) {
  array[index] = newValue;
}
let quick = 0 
let newDrive= Number(state.drive)
if (state.drive<1 && props.driveValue<1){quick=null}
else{ quick=total-props.parValue}
if (props.playerValue==0){
updateSwing(totalSwing[0].drive, props.holeValue,newDrive);
}else if (props.playerValue==1){
  updateSwing(totalSwing[1].drive, props.holeValue, newDrive);
} else if (props.playerValue==2){
    updateSwing(totalSwing[2].drive, props.holeValue,newDrive);
  } else{
      updateSwing(totalSwing[3].drive, props.holeValue,newDrive);
    }
    let newPutt= Number(state.putt)
    if (props.playerValue==0){
      updateSwing(totalSwing[0].putt, props.holeValue,newPutt);
      }else if (props.playerValue==1){
        updateSwing(totalSwing[1].putt, props.holeValue, newPutt);
      } else if (props.playerValue==2){
          updateSwing(totalSwing[2].putt, props.holeValue,newPutt);
        } else{
            updateSwing(totalSwing[3].putt, props.holeValue,newPutt);
          }
      


    function updateScore(array, index, newScore) {
      array[index] = newScore;
    }
   
    let newScore = totalScore;
    if (props.playerValue==0 & state.drive>=1){
      updateScore(totalSwing[0].scoreTotal, props.holeValue, newScore);
    }else if (props.playerValue==1 & state.drive>=1){
      updateScore(totalSwing[1].scoreTotal, props.holeValue, newScore);
    } else if (props.playerValue==2& state.drive>=1 ){
      updateScore(totalSwing[2].scoreTotal, props.holeValue, newScore);
      } else if(props.playerValue==3& state.drive>=1 ){
        updateScore(totalSwing[3].scoreTotal, props.holeValue, newScore);
        } else {newScore=0}

return(
<Container className='holes' >
        <Row className='gx-0 g-0'>
          <Col>
          <Input  
            id="exampleSelect"
            name="drive"
            type="select"
            onChange={handleChange}
            value={state.drive}
            placeholder={null}
            >
           <option >{props.driveValue}</option>
              {Drive.map(item => {
                  return (<option key={item.label} value={item.value}>{item.label}</option>);
              })}
            </Input>
          </Col>
          <Col>
          <Input  
            id="exampleSelect"
            name="putt"
            type="select"
            onChange={handleChange}
            value={state.putt}
            >
              <option>{props.puttValue}</option>
              {Patt.map(item => {
                  return (<option key={item.label} value={item.label}>{item.label}</option>);
              })}
            </Input>
          </Col>
          <Col>
          <Input id="exampleSelect"
            name="select"
            type="select"
            >
                <option>{quick}</option>
            </Input>
          </Col>
          <Col>
          <Input 
            id="exampleSelect"
            name="par"
            type="select">
              <option>{totalScore}</option>
          </Input>
        </Col>

        </Row>
          </Container>
)
            }
        
export default HoleCount;