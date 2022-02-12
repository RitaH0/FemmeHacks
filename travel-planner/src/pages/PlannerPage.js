import React, {useEffect, useState} from 'react';
import {Col, Row, Container} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Days from '../components/Days';
const PlannerPage = () =>{

    // const [duration, setDuration] = useState("");
    var duration = sessionStorage.getItem("duration")

    let elements = [];

    const showDays = () =>{
        console.log("days: ",duration);
        for (let i = 1; i<= duration; i++){
            console.log(i);

            elements.push(
                <Days day = {i}/>
            );
            // elements.push(
            //     <h>hi</h>
            // );
        }
    };

    // console.log(elements);

    return(
        <div className = "PlannerPage">
            <div className = "PlannerPage__body"> 
            <Container>
                <Row>
                <h className = "header">Your {duration} day trip plan: </h>

                </Row>
            </Container>
            {showDays()}
            {elements}
            {/* <Link type = "button" className = "btn"to = {{
                pathname: "/EditDaily",
                state: "day 1",
            }}>
                <p className = "btnName">day 1</p>
            </Link>

            <Link type = "button" className = "btn"to = {{
                pathname: "/EditDaily",
                state: "day 2",
            }}>
                <p className = "btnName">day 2</p>
            </Link> */}



            {/* <Container>
                <Row>
                    <h>Your {duration} day trip plan: </h>

                </Row>
                <Row>
                    <Col>
                        <div className = 'columnBox'>
                            <h className='columnText'>DATE</h>
                        </div>
                    </Col>
                    <Col>
                        <div className = 'columnBox'>
                            <h className='columnText'>DAY</h>
                        </div>
                    </Col>
                </Row>
            </Container> */}

            </div>
        </div>
    )
}

export default PlannerPage;