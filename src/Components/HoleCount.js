import React , {useState} from "react";
import {Input, Col, Row,Container} from 'reactstrap';
import '../App.css';
import {Drive,Patt} from "./Data";

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
    console.log("changed",evt.target.value,total)
  }

let total = Number(state.drive)+Number(state.putt)

return(
<Container className='holes' >
        <Row className='gx-0 g-0'>
        <Col>
          <Input 
            id="exampleSelect"
            name="par"
            type="select"
            onChange={handleChange}
            value={state.par}>
              <option key={props.parValue} value={props.parValue}>{props.parValue}</option>
          </Input>
        </Col>
          <Col>
          <Input  
            id="exampleSelect"
            name="drive"
            type="select"
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
            onChange={handleChange}
            value={state.putt}
            >
              {Patt.map(item => {
                  return (<option key={item.label} value={item.value}>{item.label}</option>);
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
        </Row>
          </Container>
)
            }
        
export default HoleCount;