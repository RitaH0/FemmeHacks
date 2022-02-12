import React, {useEffect, useState} from 'react';
import {Col, Row, Button, Container} from "react-bootstrap";
import DailyColumn from '../components/DailyColumn';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
const EditDaily = ({props}
) => {
    const location = useLocation();
     console.log('state', location);

    return(
        <div className='EditDaily'>
            <div className='EditDaily__body'>

            <Container>
                <Row>
 
                    <div className = 'dayNumber'>
                        <h className = "dayNumberText">hi</h>
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
                        <DailyColumn columnName = "DESTINATION"/>
                    </Col>
                    <Col className = "dailyCol">
                        <DailyColumn columnName = "FOOD"/>
                    </Col>
                    <Col className = "dailyCol">
                        <DailyColumn columnName = "LEISURE"/>
                    </Col>
                    <Col className = "dailyCol">
                        <DailyColumn columnName = "TRANSPORTATION"/>
                    </Col>
                </Row>
            </Container>


            </div>
        </div>
        
    )

}

export default EditDaily;