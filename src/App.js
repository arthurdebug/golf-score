import './App.css';
import React , { useState, useEffect } from "react";
import { Table,FormGroup,Label,Input, Col, Row,Container, Button} from 'reactstrap';
import { IoGolf } from "react-icons/io5";
import { FaGolfBall } from "react-icons/fa";
import { MdGolfCourse,MdSportsScore } from "react-icons/md";

function App() {
  const golfCourse = [
    {label:'East', 
    par: [5,4,3,4,3,5,4,3,4,5,4,4,3,4,3,5,4,5],
    difficulty:[11,5,17,9,15,1,13,7,3,8,12,16,14,4,18,10,2,6]},
    {label:'North', 
    par: [5,4,3,4,4,4,3,5,4,4,3,5,4,3,4,4,5,4],
    difficulty:[5,11,9,3,13,15,17,7,1,4,12,2,18,6,14,16,8]},
  ]
  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6'},
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9'},
    { value: '10', label: '10'},
    { value: '11', label: '11'},
    { value: '12', label: '12'},
    { value: '13', label: '13' },
    { value: '14', label: '14' },
    { value: '15', label: '15' },
    { value: '16', label: '16' },
    { value: '17', label: '17' },
    { value: '18', label: '18' }
  ]
  const [courseState, setCourseState] = useState();
  useEffect(() => {
    setCourseState(golfCourse[0]);
  }, []);
  const onChangeCourse = (e) => {
    console.log('working',e.target.value)
    const selectedId = e.target.value;
    const selectedCourseState = golfCourse.filter((d) => d.label === selectedId)[0];
    setCourseState(selectedCourseState);
    console.log(courseState)
  };
    
  return (
    <div className="App">
      <header className="App-header">
        
        <p className='lockPlace'>
          Golf Score v0.5
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
            <Table striped hover class="fl-table">
  <thead>
    <tr>
      <th class="headcol">
        Player
      </th>
      <th class="headcol">
        Handicap
      </th>
      <th>
      <Container className='holes' >
      <div>H1 SI {courseState?.difficulty[0]}</div> 
        <Row>
          <Col><FaGolfBall/></Col>
          <Col><MdGolfCourse/></Col>
          <Col><IoGolf/></Col>
          <Col><MdSportsScore/></Col>
        </Row>
          </Container>
      </th>
      <th>
        <Container className="holes">
        <div>H2 SI {courseState?.difficulty[1]}</div>
        <Row className='g-0'>
          <Col><FaGolfBall/></Col>
          <Col>Putt</Col>
          <Col>Par</Col>
          <Col>Total</Col>
        </Row>
          </Container>
      </th>
      <th>
      <Container className='holes' >
      <div>H3 SI {courseState?.difficulty[2]}</div>
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
      <div>H4 SI {courseState?.difficulty[3]}</div>
        <Row>
          <Col><FaGolfBall/></Col>
          <Col><MdGolfCourse/></Col>
          <Col><IoGolf/></Col>
          <Col><MdSportsScore/></Col>
        </Row>
          </Container>
      </th>
      <th>
        <Container className="holes">
        <div>H5 SI {courseState?.difficulty[4]}</div>
        <div className='holeHead'>
          <div>Drive</div>
          <div>Putt</div>
          <div>Par</div>
          <div>Total</div>
        </div>
          </Container>
      </th>
      <th>
      <Container className='holes' >
      <div>H6 SI {courseState?.difficulty[5]}</div>
          <div className='holeHead'>
          <div>Drive</div>
          <div>Putt</div>
          <div>Par</div>
          <div>Total</div>
        </div>
          </Container>
      </th>
      <th>
      <Container className='holes' >
      <div>H7 SI {courseState?.difficulty[6]}</div>
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
      <div>H8 SI {courseState?.difficulty[7]}</div>
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
      <div>H9 SI {courseState?.difficulty[8]}</div>
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
      <div>H10 SI {courseState?.difficulty[9]}</div>
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
      <div>H11 SI {courseState?.difficulty[10]}</div>
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
      <div>H12 SI {courseState?.difficulty[11]}</div>
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
      <div>H13 SI {courseState?.difficulty[12]}</div>
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
      <div>H14 SI {courseState?.difficulty[13]}</div>
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
      <div>H15 SI {courseState?.difficulty[14]}</div>
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
      <div>H16 SI {courseState?.difficulty[15]}</div>
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
      <div>H17 SI {courseState?.difficulty[16]}</div>
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
      <div>H18 SI {courseState?.difficulty[17]}</div>
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
        CH Lai
        <div>Score</div>
      </th>
      <td>
      <FormGroup>
            <Input  
            id="exampleSelect"
            name="select"
            type="select"
            value={options} >
              {options.map(item => {
                  return (<option key={item.label} value={item.label}>{item.label}</option>);
              })}
            </Input>
  </FormGroup>
      </td>
      <td>
      <Container className='holes' >
        <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber" value={courseState?.par[0]}></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
          </Container>
      </td>
      <td>
      <Container className='holes' >
        <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber" value={courseState?.par[1]}></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
          </Container>
      </td>
      <td>
      <Container className='holes' >
        <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber" value={courseState?.par[2]}></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
          </Container>
      </td>
      <td>
      <Container className='holes' >
        <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber" value={courseState?.par[3]}></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
          </Container>
      </td>
      <td>
      <Container className='holes' >
        <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber" value={courseState?.par[4]}></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
          </Container>
      </td>
      <td>
      <Container className='holes' >
        <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber" value={courseState?.par[5]}></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
          </Container>
      </td>
      <td>
      <Container className='holes' >
        <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber" value={courseState?.par[6]}></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
          </Container>
      </td>
      <td>
      <Container className='holes' >
        <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber" value={courseState?.par[7]}></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
          </Container>
      </td>
      <td>
      <Container className='holes' >
        <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber" value={courseState?.par[8]}></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
          </Container>
      </td>
      <td>
      <Container className='holes' >
        <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber" value={courseState?.par[9]}></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
          </Container>
      </td>
      <td>
      <Container className='holes' >
        <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber" value={courseState?.par[10]}></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
          </Container>
      </td>
      <td>
      <Container className='holes' >
        <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber" value={courseState?.par[11]}></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
          </Container>
      </td>
      <td>
      <Container className='holes' >
        <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber" value={courseState?.par[12]}></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
          </Container>
      </td>
      <td>
      <Container className='holes' >
        <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber" value={courseState?.par[13]}></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
          </Container>
      </td>
      <td>
      <Container className='holes' >
        <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber" value={courseState?.par[14]}></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
          </Container>
      </td>
      <td>
      <Container className='holes' >
        <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber" value={courseState?.par[15]}></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
          </Container>
      </td>
      <td>
      <Container className='holes' >
        <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber" value={courseState?.par[16]}></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
          </Container>
      </td>
      <td>
      <Container className='holes' >
        <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber" value={courseState?.par[17]}></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
          </Container>
      </td>
      </tr>
    
    </tbody>
            </Table>
          </div>
        </div>
      </div>
      <div className='lockPlace'> <Button>Add Player</Button> <Button>Clear</Button></div>
<p className='lockPlace last'>Created By Arthur 2022</p>
</header>
</div>
  );
}

export default App;
