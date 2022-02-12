import React, {useEffect, useState} from 'react';
import {Col, Row, Button, Container} from "react-bootstrap";
import DailyColumn from '../components/DailyColumn';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
const EditDaily = ({props}
) => {
    // const location = useLocation();
    //  console.log('state', location);

     const [destination, setDestination] = useState(" ");
     const [food, setFood] = useState(" ");
     const [leisure, setLeisure] = useState(" ");
     const [transportation, setTransportation] = useState(" ");

     console.log(destination)
     console.log(food)
     console.log(leisure)
     console.log(transportation)

    return(
        <div className='EditDaily'>
            <div className='EditDaily__body'>

            <Container>
                <Row>
 
                    <div className = 'dayNumber'>
                        <h className = "dayNumberText">Enter your plan</h>
                    </div>
                    {/* <a href='/PlannerPage'>
                    <button className = 'backButton'>Save</button>
                    </a> */}
                <Link className = "backButton"to = {{
                    pathname: "/PlannerPage",
                }}>
                    <p className = "backButtonText">save</p>
                </Link>
                </Row>
                <Row className = "dailyRow">
                    <Col className = "dailyCol">
                        {/* <DailyColumn columnName = "Destination" day = "day1"/> */}
                        <Row>
                            <div className = 'columnBox'>
                                <h className='columnText'>Destination</h>
                            </div>
                        </Row>
                        <Row>
                            <input id = "Destination"className='columnInput' type="text" onChange = {event => setDestination(event.target.value)} ></input>
                        </Row>
                    </Col>
                    <Col className = "dailyCol">
                        {/* <DailyColumn columnName = "Food" day = "day1"/> */}
                        <Row>
                            <div className = 'columnBox'>
                                <h className='columnText'>Food</h>
                            </div>
                        </Row>
                        <Row>
                            <input id = "Destination"className='columnInput' type="text" onChange = {event => setFood(event.target.value)}></input>
                        </Row>
                    </Col>
                    <Col className = "dailyCol">
                        {/* <DailyColumn columnName = "Leisure" day = "day1"/> */}
                        <Row>
                            <div className = 'columnBox'>
                                <h className='columnText'>Leisure</h>
                            </div>
                        </Row>
                        <Row>
                            <input id = "Destination"className='columnInput' type="text"onChange = {event => setLeisure(event.target.value)} ></input>
                        </Row>
                    </Col>
                    <Col className = "dailyCol">
                        {/* <DailyColumn columnName = "Transportation" day = "day1"/> */}
                        <Row>
                            <div className = 'columnBox'>
                                <h className='columnText'>Transportation</h>
                            </div>
                        </Row>
                        <Row>
                            <input id = "Destination"className='columnInput' type="text"onChange = {event => setTransportation(event.target.value)} ></input>
                        </Row>
                    </Col>
                </Row>
            </Container>


            </div>
        </div>
        
    )

}

export default EditDaily;