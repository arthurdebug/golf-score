import {Input} from 'reactstrap';
import '../App.css';
import {totalSwing,options} from "./Data";

const HandicapNumber=(props)=>{
let number=props.playerValue
function handleHandiChange(e) {
  totalSwing[number].handicap=e.target.value
    }

return(
<Input  
            id="exampleSelect"
            name="p1"
            type="select"
            value={props.defaultNumber}
            onChange={handleHandiChange} >
              <option>{totalSwing[number].handicap}</option>
              {options.map(item => {
                  return (<option key={item.label} value={item.label}>{item.label}</option>);
              })}
            </Input>)
}
export default HandicapNumber;