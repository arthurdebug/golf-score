import './App.css';
import React , { useState, useEffect, useReducer} from "react";
import { Table,FormGroup,Label,Input, Col, Row,Container, Button} from 'reactstrap';
import { IoGolf } from "react-icons/io5";
import { FaGolfBall } from "react-icons/fa";
import { MdGolfCourse,MdSportsScore } from "react-icons/md";
import HoleCount from './Components/HoleCount';
import {totalSwing,options} from "./Components/Data";
import PlayerName from './Components/PlayerName';
import HandicapNumber from './Components/HandicapNumber';

function App() {
  let date= Date()
  const golfCourse = [
    {label:'East', 
    par: [5,4,3,4,3,5,4,3,4,5,4,4,3,4,3,5,4,5],
    difficulty:[11,5,17,9,15,1,13,7,3,8,12,16,14,4,18,10,2,6]},
    {label:'North', 
    par: [5,4,3,4,4,4,3,5,4,4,3,5,4,3,4,4,5,4],
    difficulty:[5,11,9,3,13,15,17,7,1,4,12,2,18,6,14,16,8]},
    {label:'South', 
    par: [4,3,4,4,3,4,4,4,4,4,3,4,4,4,5,3,4,4],
    difficulty:[5,11,1,17,7,15,9,13,3,16,14,4,10,2,8,6,18,12]},
  ]

  const[gameState,setGameState]=useState(totalSwing)
  const [courseState, setCourseState] = useState();
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  function onClickCounter() {
    forceUpdate();
  }
  function loaddata(){
    totalSwing[0]=gameState[0]
    totalSwing[1]=gameState[1]
    totalSwing[2]=gameState[2]
    totalSwing[3]=gameState[3]
    console.log("game"+JSON.stringify(gameState)+"totalSwing"+JSON.stringify(totalSwing))
  }
  function onClickSave(){
    setGameState(totalSwing)
    console.log('totalSwing'+JSON.stringify(totalSwing))
  localStorage.setItem('game', JSON.stringify(totalSwing));
  console.log('gameState'+JSON.stringify(gameState))
  }
  async function onClickLoad(){
    const textFromStorage = localStorage.getItem('game');
    setGameState(JSON.parse(textFromStorage))
    loaddata()
    loaddata()
    }
  useEffect(() => {
    console.log("used useEffect")
    setCourseState(golfCourse[0]);
  }, []);
  const onChangeCourse = (e) => {
    console.log('working',e.target.value)
    const selectedId = e.target.value;
    const selectedCourseState = golfCourse.filter((d) => d.label === selectedId)[0];
    setCourseState(selectedCourseState);
    console.log(courseState)
    
  };
  function refreshPage() {
    window.location.reload(false);
  }
  let t1=Number(totalSwing[0].drive.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0
    )+totalSwing[0].putt.reduce(
      (accumulator, currentValue) => accumulator + currentValue, 0
      ))
  let t2=Number(totalSwing[1].drive.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0
    )+totalSwing[1].putt.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0
    ))
    let t3=Number(totalSwing[2].drive.reduce(
      (accumulator, currentValue) => accumulator + currentValue, 0
      )+totalSwing[2].putt.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0
        ))
    let t4=Number(totalSwing[3].drive.reduce(
      (accumulator, currentValue) => accumulator + currentValue, 0
      )+totalSwing[3].putt.reduce(
      (accumulator, currentValue) => accumulator + currentValue, 0
      ))




          let s1=Number(totalSwing[0].scoreTotal.reduce(
            (accumulator, currentValue) => accumulator + currentValue, 0
            ))
          let s2=Number(totalSwing[1].scoreTotal.reduce(
              (accumulator, currentValue) => accumulator + currentValue, 0
              ))
          let s3=Number(totalSwing[2].scoreTotal.reduce(
                (accumulator, currentValue) => accumulator + currentValue, 0
                ))
          let s4=Number(totalSwing[3].scoreTotal.reduce(
                  (accumulator, currentValue) => accumulator + currentValue, 0
                  ))
  


  return (
    <div className="App">
      <header className="App-header">
        <p className='lockPlace'>
          Golf Score v1.11 {date}
        </p>
        <Label className='lockPlace'>
      Location
    </Label>
    <div className='lockPlace'>
            <Input  
            id="exampleSelect"
            name="select"
            type="select"
            value={golfCourse.label}
            onChange={(e) => {
              console.log("clicked")
              onChangeCourse(e);
            }}
            >
              {golfCourse.map(item => {
                  return (<option key={item.label} value={item.label}>{item.label}</option>);
              })}
            </Input>

            </div>
      <div className="contanier" >
        <div className='row'>
          <div>
            <Table striped hover className="fl-table">
  <thead>
    <tr>
      <th className="headcol">
        Player
      </th>
      <th className="headcol">
        Handicap
      </th>
      <th>
      <Container className='holes' >
      <div>H1 SI {courseState?.difficulty[0]} Par {courseState?.par[0]}</div> 
        <Row>
          <Col><FaGolfBall/></Col>
          <Col><MdGolfCourse/></Col>
          <Col><IoGolf/></Col>
          <Col><MdSportsScore/></Col>
        </Row>
          </Container>
      </th>
      <th>
      <Container className='holes' >
      <div>H2 SI {courseState?.difficulty[1]} Par {courseState?.par[1]}</div> 
        <Row>
          <Col><FaGolfBall/></Col>
          <Col><MdGolfCourse/></Col>
          <Col><IoGolf/></Col>
          <Col><MdSportsScore/></Col>
        </Row>
          </Container>
      </th>
      <th>
      <Container className='holes' >
      <div>H3 SI {courseState?.difficulty[2]} Par {courseState?.par[2]}</div> 
        <Row>
          <Col><FaGolfBall/></Col>
          <Col><MdGolfCourse/></Col>
          <Col><IoGolf/></Col>
          <Col><MdSportsScore/></Col>
        </Row>
          </Container>
      </th>
      <th>
      <Container className='holes' >
      <div>H4 SI {courseState?.difficulty[3]} Par {courseState?.par[3]}</div> 
        <Row>
          <Col><FaGolfBall/></Col>
          <Col><MdGolfCourse/></Col>
          <Col><IoGolf/></Col>
          <Col><MdSportsScore/></Col>
        </Row>
          </Container>
      </th>
      <th>
      <Container className='holes' >
      <div>H5 SI {courseState?.difficulty[4]} Par {courseState?.par[4]}</div> 
        <Row>
          <Col><FaGolfBall/></Col>
          <Col><MdGolfCourse/></Col>
          <Col><IoGolf/></Col>
          <Col><MdSportsScore/></Col>
        </Row>
          </Container>
      </th>
      <th>
      <Container className='holes' >
      <div>H6 SI {courseState?.difficulty[5]} Par {courseState?.par[5]}</div> 
        <Row>
          <Col><FaGolfBall/></Col>
          <Col><MdGolfCourse/></Col>
          <Col><IoGolf/></Col>
          <Col><MdSportsScore/></Col>
        </Row>
          </Container>
      </th>
      <th>
      <Container className='holes' >
      <div>H7 SI {courseState?.difficulty[6]} Par {courseState?.par[6]}</div> 
        <Row>
          <Col><FaGolfBall/></Col>
          <Col><MdGolfCourse/></Col>
          <Col><IoGolf/></Col>
          <Col><MdSportsScore/></Col>
        </Row>
          </Container>
      </th>
      <th>
      <Container className='holes' >
      <div>H8 SI {courseState?.difficulty[7]} Par {courseState?.par[7]}</div> 
        <Row>
          <Col><FaGolfBall/></Col>
          <Col><MdGolfCourse/></Col>
          <Col><IoGolf/></Col>
          <Col><MdSportsScore/></Col>
        </Row>
          </Container>
      </th>
      <th>
      <Container className='holes' >
      <div>H9 SI {courseState?.difficulty[8]} Par {courseState?.par[8]}</div> 
        <Row>
          <Col><FaGolfBall/></Col>
          <Col><MdGolfCourse/></Col>
          <Col><IoGolf/></Col>
          <Col><MdSportsScore/></Col>
        </Row>
          </Container>
      </th>
      <th>
      <Container className='holes' >
      <div>H10 SI {courseState?.difficulty[9]} Par {courseState?.par[9]}</div> 
        <Row>
          <Col><FaGolfBall/></Col>
          <Col><MdGolfCourse/></Col>
          <Col><IoGolf/></Col>
          <Col><MdSportsScore/></Col>
        </Row>
          </Container>
      </th>
      <th>
      <Container className='holes' >
      <div>H11 SI {courseState?.difficulty[10]} Par {courseState?.par[10]}</div> 
        <Row>
          <Col><FaGolfBall/></Col>
          <Col><MdGolfCourse/></Col>
          <Col><IoGolf/></Col>
          <Col><MdSportsScore/></Col>
        </Row>
          </Container>
      </th>
      <th>
      <Container className='holes' >
      <div>H12 SI {courseState?.difficulty[11]} Par {courseState?.par[11]}</div> 
        <Row>
          <Col><FaGolfBall/></Col>
          <Col><MdGolfCourse/></Col>
          <Col><IoGolf/></Col>
          <Col><MdSportsScore/></Col>
        </Row>
          </Container>
      </th>
      <th>
      <Container className='holes' >
      <div>H13 SI {courseState?.difficulty[12]} Par {courseState?.par[12]}</div> 
        <Row>
          <Col><FaGolfBall/></Col>
          <Col><MdGolfCourse/></Col>
          <Col><IoGolf/></Col>
          <Col><MdSportsScore/></Col>
        </Row>
          </Container>
      </th>
      <th>
      <Container className='holes' >
      <div>H14 SI {courseState?.difficulty[13]} Par {courseState?.par[13]}</div> 
        <Row>
          <Col><FaGolfBall/></Col>
          <Col><MdGolfCourse/></Col>
          <Col><IoGolf/></Col>
          <Col><MdSportsScore/></Col>
        </Row>
          </Container>
      </th>
      <th>
      <Container className='holes' >
      <div>H15 SI {courseState?.difficulty[14]} Par {courseState?.par[14]}</div> 
        <Row>
          <Col><FaGolfBall/></Col>
          <Col><MdGolfCourse/></Col>
          <Col><IoGolf/></Col>
          <Col><MdSportsScore/></Col>
        </Row>
          </Container>
      </th>
      <th>
      <Container className='holes' >
      <div>H16 SI {courseState?.difficulty[15]} Par {courseState?.par[15]}</div> 
        <Row>
          <Col><FaGolfBall/></Col>
          <Col><MdGolfCourse/></Col>
          <Col><IoGolf/></Col>
          <Col><MdSportsScore/></Col>
        </Row>
          </Container>
      </th>
      <th>
      <Container className='holes' >
      <div>H17 SI {courseState?.difficulty[16]} Par {courseState?.par[16]}</div> 
        <Row>
          <Col><FaGolfBall/></Col>
          <Col><MdGolfCourse/></Col>
          <Col><IoGolf/></Col>
          <Col><MdSportsScore/></Col>
        </Row>
          </Container>
      </th>
      <th>
      <Container className='holes' >
      <div>H18 SI {courseState?.difficulty[17]} Par {courseState?.par[17]}</div> 
        <Row>
          <Col><FaGolfBall/></Col>
          <Col><MdGolfCourse/></Col>
          <Col><IoGolf/></Col>
          <Col><MdSportsScore/></Col>
        </Row>
          </Container>
      </th>

      </tr>
  </thead>
  <tbody>
  <tr>
      <th scope="row">
        <PlayerName playerValue={0} defaultValue={gameState[0].player}/>
        <div><div style={{color:"lightblue"}}>{t1}</div>
        <br></br><div style={{color:"grey"}}>{s1}</div>
        <br></br><div style={{color:"Green"}}>Green 1</div></div>
      </th>
      <td>
      <FormGroup>
           <HandicapNumber playerValue={0} defaultValue={gameState[0].HandicapNumber}/>
  </FormGroup>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[0]} playerValue={0} holeValue={0} driveValue={gameState[0].drive[0]} puttValue={gameState[0].putt[0]}/>
      
      </td>
      <td>
      <HoleCount parValue={courseState?.par[1]} playerValue={0} holeValue={1} driveValue={gameState[0].drive[1]} puttValue={gameState[0].putt[1]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[2]} playerValue={0} holeValue={2} driveValue={gameState[0].drive[2]} puttValue={gameState[0].putt[2]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[3]} playerValue={0} holeValue={3} driveValue={gameState[0].drive[3]} puttValue={gameState[0].putt[3]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[4]} playerValue={0} holeValue={4} driveValue={gameState[0].drive[4]} puttValue={gameState[0].putt[4]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[5]} playerValue={0} holeValue={5} driveValue={gameState[0].drive[5]} puttValue={gameState[0].putt[5]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[6]} playerValue={0} holeValue={6} driveValue={gameState[0].drive[6]} puttValue={gameState[0].putt[6]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[7]} playerValue={0} holeValue={7} driveValue={gameState[0].drive[7]} puttValue={gameState[0].putt[7]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[8]} playerValue={0} holeValue={8} driveValue={gameState[0].drive[8]} puttValue={gameState[0].putt[8]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[9]} playerValue={0} holeValue={9} driveValue={gameState[0].drive[9]} puttValue={gameState[0].putt[9]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[10]} playerValue={0} holeValue={10} driveValue={gameState[0].drive[10]} puttValue={gameState[0].putt[10]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[11]} playerValue={0} holeValue={11} driveValue={gameState[0].drive[11]} puttValue={gameState[0].putt[11]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[12]} playerValue={0} holeValue={12} driveValue={gameState[0].drive[12]} puttValue={gameState[0].putt[12]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[13]} playerValue={0} holeValue={13} driveValue={gameState[0].drive[13]} puttValue={gameState[0].putt[13]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[14]} playerValue={0} holeValue={14} driveValue={gameState[0].drive[14]} puttValue={gameState[0].putt[14]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[15]} playerValue={0} holeValue={15} driveValue={gameState[0].drive[15]} puttValue={gameState[0].putt[15]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[16]} playerValue={0} holeValue={16} driveValue={gameState[0].drive[16]} puttValue={gameState[0].putt[16]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[17]} playerValue={0} holeValue={17} driveValue={gameState[0].drive[17]} puttValue={gameState[0].putt[17]}/>
      </td>
      </tr>
      <tr>
      <th scope="row">
      <PlayerName defaultValue={gameState[1].player} playerValue={1}/>
        <div>total{t2}<br></br>Score{s2}</div>
      </th>
      <td>
      <FormGroup>
      <HandicapNumber playerValue={1} defaultValue={gameState[1].handicap}/>

  </FormGroup>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[0]} playerValue={1} holeValue={0}  driveValue={gameState[1].drive[0]} puttValue={gameState[1].putt[0]}/>
      
      </td>
      <td>
      <HoleCount parValue={courseState?.par[1]} playerValue={1} holeValue={1} driveValue={gameState[1].drive[1]} puttValue={gameState[1].putt[1]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[2]} playerValue={1} holeValue={2} driveValue={gameState[1].drive[2]} puttValue={gameState[1].putt[2]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[3]} playerValue={1} holeValue={3} driveValue={gameState[1].drive[3]} puttValue={gameState[1].putt[3]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[4]} playerValue={1} holeValue={4} driveValue={gameState[1].drive[4]} puttValue={gameState[1].putt[4]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[5]} playerValue={1} holeValue={5} driveValue={gameState[1].drive[5]} puttValue={gameState[1].putt[5]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[6]} playerValue={1} holeValue={6} driveValue={gameState[1].drive[6]} puttValue={gameState[1].putt[6]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[7]} playerValue={1} holeValue={7} driveValue={gameState[1].drive[7]} puttValue={gameState[1].putt[7]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[8]} playerValue={1} holeValue={8} driveValue={gameState[1].drive[8]} puttValue={gameState[1].putt[8]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[9]} playerValue={1} holeValue={9} driveValue={gameState[1].drive[9]} puttValue={gameState[1].putt[9]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[10]} playerValue={1} holeValue={10} driveValue={gameState[1].drive[10]} puttValue={gameState[1].putt[10]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[11]} playerValue={1} holeValue={11} driveValue={gameState[1].drive[11]} puttValue={gameState[1].putt[11]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[12]} playerValue={1} holeValue={12} driveValue={gameState[1].drive[12]} puttValue={gameState[1].putt[12]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[13]} playerValue={1} holeValue={13} driveValue={gameState[1].drive[13]} puttValue={gameState[1].putt[13]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[14]} playerValue={1} holeValue={14} driveValue={gameState[1].drive[14]} puttValue={gameState[1].putt[14]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[15]} playerValue={1} holeValue={15} driveValue={gameState[1].drive[15]} puttValue={gameState[1].putt[15]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[16]} playerValue={1} holeValue={16} driveValue={gameState[1].drive[16]} puttValue={gameState[1].putt[16]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[17]} playerValue={1} holeValue={17} driveValue={gameState[1].drive[17]} puttValue={gameState[1].putt[17]}/>
      </td>
      </tr>
      <tr>
      <th scope="row">
      <PlayerName defaultValue={gameState[2].player} playerValue={2}/>
        <div>total{t3}<br></br>Score{s3}</div>
      </th>
      <td>
      <FormGroup>
      <HandicapNumber playerValue={2} defaultValue={gameState[2].handicap}/>

  </FormGroup>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[0]} playerValue={2} holeValue={0}  driveValue={gameState[2].drive[0]} puttValue={gameState[2].putt[0]}/>
      
      </td>
      <td>
      <HoleCount parValue={courseState?.par[1]} playerValue={2} holeValue={1} driveValue={gameState[2].drive[1]} puttValue={gameState[2].putt[1]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[2]} playerValue={2} holeValue={2} driveValue={gameState[2].drive[2]} puttValue={gameState[2].putt[2]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[3]} playerValue={2} holeValue={3} driveValue={gameState[2].drive[3]} puttValue={gameState[2].putt[3]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[4]} playerValue={2} holeValue={4} driveValue={gameState[2].drive[4]} puttValue={gameState[2].putt[4]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[5]} playerValue={2} holeValue={5} driveValue={gameState[2].drive[5]} puttValue={gameState[2].putt[5]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[6]} playerValue={2} holeValue={6} driveValue={gameState[2].drive[6]} puttValue={gameState[2].putt[6]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[7]} playerValue={2} holeValue={7} driveValue={gameState[2].drive[7]} puttValue={gameState[2].putt[7]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[8]} playerValue={2} holeValue={8} driveValue={gameState[2].drive[8]} puttValue={gameState[2].putt[8]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[9]} playerValue={2} holeValue={9} driveValue={gameState[2].drive[9]} puttValue={gameState[2].putt[9]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[10]} playerValue={2} holeValue={10} driveValue={gameState[2].drive[10]} puttValue={gameState[2].putt[10]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[11]} playerValue={2} holeValue={11} driveValue={gameState[2].drive[11]} puttValue={gameState[2].putt[11]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[12]} playerValue={2} holeValue={12} driveValue={gameState[2].drive[12]} puttValue={gameState[2].putt[12]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[13]} playerValue={2} holeValue={13} driveValue={gameState[2].drive[13]} puttValue={gameState[2].putt[13]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[14]} playerValue={2} holeValue={14} driveValue={gameState[2].drive[14]} puttValue={gameState[2].putt[14]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[15]} playerValue={2} holeValue={15} driveValue={gameState[2].drive[15]} puttValue={gameState[2].putt[15]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[16]} playerValue={2} holeValue={16} driveValue={gameState[2].drive[16]} puttValue={gameState[2].putt[16]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[17]} playerValue={2} holeValue={17} driveValue={gameState[2].drive[17]} puttValue={gameState[2].putt[17]}/>
      </td>
      </tr>
      <tr>
      <th scope="row">
      <PlayerName defaultValue={gameState[3].player} playerValue={3}/>
        <div>total{t4}<br></br>Score{s4}</div>
      </th>
      <td>
      <FormGroup>
      <HandicapNumber playerValue={3} defaultValue={gameState[3].handicap}/>

  </FormGroup>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[0]} playerValue={3} holeValue={0} driveValue={gameState[3].drive[0]} puttValue={gameState[3].putt[0]}/>
      
      </td>
      <td>
      <HoleCount parValue={courseState?.par[1]} playerValue={3} holeValue={1} driveValue={gameState[3].drive[1]} puttValue={gameState[3].putt[1]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[2]} playerValue={3} holeValue={2} driveValue={gameState[3].drive[2]} puttValue={gameState[3].putt[2]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[3]} playerValue={3} holeValue={3} driveValue={gameState[3].drive[3]} puttValue={gameState[3].putt[3]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[4]} playerValue={3} holeValue={4} driveValue={gameState[3].drive[4]} puttValue={gameState[3].putt[4]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[5]} playerValue={3} holeValue={5} driveValue={gameState[3].drive[5]} puttValue={gameState[3].putt[5]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[6]} playerValue={3} holeValue={6} driveValue={gameState[3].drive[6]} puttValue={gameState[3].putt[6]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[7]} playerValue={3} holeValue={7} driveValue={gameState[3].drive[7]} puttValue={gameState[3].putt[7]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[8]} playerValue={3} holeValue={8} driveValue={gameState[3].drive[8]} puttValue={gameState[3].putt[8]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[9]} playerValue={3} holeValue={9} driveValue={gameState[3].drive[9]} puttValue={gameState[3].putt[9]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[10]} playerValue={3} holeValue={10} driveValue={gameState[3].drive[10]} puttValue={gameState[3].putt[10]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[11]} playerValue={3} holeValue={11} driveValue={gameState[3].drive[11]} puttValue={gameState[3].putt[11]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[12]} playerValue={3} holeValue={12} driveValue={gameState[3].drive[12]} puttValue={gameState[3].putt[12]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[13]} playerValue={3} holeValue={13} driveValue={gameState[3].drive[13]} puttValue={gameState[3].putt[13]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[14]} playerValue={3} holeValue={14} driveValue={gameState[3].drive[14]} puttValue={gameState[3].putt[14]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[15]} playerValue={3} holeValue={15} driveValue={gameState[3].drive[15]} puttValue={gameState[3].putt[15]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[16]} playerValue={3} holeValue={16} driveValue={gameState[3].drive[16]} puttValue={gameState[3].putt[16]}/>
      </td>
      <td>
      <HoleCount parValue={courseState?.par[17]} playerValue={3} holeValue={17} driveValue={gameState[3].drive[17]} puttValue={gameState[3].putt[17]}/>
      </td>
      </tr>
    </tbody>
            </Table>
          </div>
        </div>
      </div>
      <div className='lockPlace' onClick={onClickCounter}> <Button>update</Button> <Button onClick={refreshPage}>Clear</Button><Button onClick={onClickSave}>Save</Button><Button onClick={onClickLoad}>Load</Button></div><div><Button onClick={loaddata}>check</Button></div>
<p className='lockPlace last'>Created By Arthur 2022</p>
</header>
</div>
  );
}

export default App;
