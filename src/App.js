import './App.css';
import React from "react";
import { Table,FormGroup,Label,Input, Col, Row,Container, Button} from 'reactstrap';
import { IoGolf } from "react-icons/io5";
import { FaGolfBall } from "react-icons/fa";
import { MdGolfCourse,MdSportsScore } from "react-icons/md";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p className='lockPlace'>
          Golf Score v0
        </p>
        <FormGroup className='lockPlace'>
    <Label for="exampleSelect">
      Location
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
      className='lockPlace'
    >
      <option>
        New
      </option>
      <option>
        Course1
      </option>
    </Input>
  </FormGroup>
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
      <div>H1 18</div> 
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
        <div>H2 17</div>
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
        <div>H3</div> <div>16</div>
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
        <div>H4</div> <div>10</div>
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
        <div>H5</div> <div>12</div>
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
          <div>H6</div> <div>11</div>
          <div className='holeHead'>
          <div>Drive</div>
          <div>Putt</div>
          <div>Par</div>
          <div>Total</div>
        </div>
          </Container>
      </th>
      </tr>
  </thead>
  <tbody>
  <tr>
      <th scope="row">
        CH Lai
      </th>
      <td>
      <FormGroup>
    <Input
      id="typeNumber"
      name="select"
      type="select">
      <option>
        -1
      </option>
      <option>
        -2
      </option>
      <option>
        -3
      </option>
      <option>
        -4
      </option>
      <option>
        -5
      </option>
    </Input>
  </FormGroup>
      </td>
      <td>
      <Container className='holes' >
        <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
          </Container>
      </td>
      <td>
      <div className='container holes' >
      <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
      </div>
      </td>
      <td>
      <div className='container holes' >
      <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
      </div>
      </td>
      <td>
      <div className='container holes' >
      <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
      </div>
      </td>
      <td>
      <div className='container holes' >
      <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
      </div>
      </td>
      <td>
      <div className='container holes' >
      <Row className='gx-0 g-0'>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
          <Col><input id="typeNumber"></input></Col>
        </Row>
      </div>
      </td>
      </tr>
    
    </tbody>
            </Table>
          </div>
        </div>
      </div>
      <div className='lockPlace'> <Button>Save</Button> <Button>New</Button></div>
      <div></div>
<p className='lockPlace last'>Created By Arthur 2022</p>
</header>
</div>
  );
}

export default App;
