import React, {useEffect, useState} from 'react';
import {Col, Row, Button, Container} from "react-bootstrap";
import DailyColumn from '../components/DailyColumn';
const EditDaily = (
    day
) => {
    return(
        <div className='EditDaily'>
            <div className='EditDaily__body'>

            <Container>
                <Row>
 
                    <div className = 'dayNumber'>
                        <h className = "dayNumberText">Day 1</h>
                    </div>
                    <a href='/PlannerPage'>
                    <button className = 'backButton'>Save</button>
                    </a>
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