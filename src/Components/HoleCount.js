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
    console.log("test",totalSwing[0].swing);
  }
let puttScore=0
if (isNaN(state.putt)==true){puttScore=1}
else{puttScore=Number(state.putt)}

let total = Number(state.drive)+Number(puttScore)
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
if (state.putt==="1a"){
  extra=4
}else if (state.putt==="1b"){
  extra=3;
}else if (state.putt==="1c"){
  extra=2;
}else if (state.putt==="1d"){
  extra=1;
}else if (state.putt==="0"){
  extra=5;}
  else {extra=0;}
let totalScore= Number(score)+Number(extra)
function updateSwing(array, index, newValue) {
  array[index] = newValue;
}

let newVal = total;
if (props.playerValue==0){
updateSwing(totalSwing[0].swing, props.holeValue, newVal);
}else if (props.playerValue==1){
  updateSwing(totalSwing[1].swing, props.holeValue, newVal);
} else if (props.playerValue==2){
    updateSwing(totalSwing[2].swing, props.holeValue, newVal);
  } else{
      updateSwing(totalSwing[3].swing, props.holeValue, newVal);
    }
    function updateScore(array, index, newScore) {
      array[index] = newScore;
    }
    
    let newScore = totalScore;
    if (props.playerValue==0){
      updateScore(totalSwing[0].scoreTotal, props.holeValue, newScore);
    }else if (props.playerValue==1){
      updateScore(totalSwing[1].scoreTotal, props.holeValue, newScore);
    } else if (props.playerValue==2){
      updateScore(totalSwing[2].scoreTotal, props.holeValue, newScore);
      } else{
        updateScore(totalSwing[3].scoreTotal, props.holeValue, newScore);
        }

return(
<Container className='holes' >
        <Row className='gx-0 g-0'>
          <Col>
          <Input  
            id="exampleSelect"
            name="drive"
            type="select"
            multiple={false}
            onChange={handleChange}
            value={state.drive}
            >
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
            multiple={false}
            onChange={handleChange}
            value={state.putt}
            >
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
                <option>{total-props.parValue}</option>
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