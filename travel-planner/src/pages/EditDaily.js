import React, {useEffect, useState} from 'react';
import {Col, Row, Button, Container} from "react-bootstrap";
import DailyColumn from '../components/DailyColumn';
const EditDaily = (
    day
) => {
    return(
        <div className='EditDaily'>
            <div className='EditDaily__body'>
                <div className = 'dayNumber'>
                    <h className = "dayNumberText">Day 1</h>

                </div>
                <div className = "container dailyColumns">
                    <Row className = "column">
                        <DailyColumn columnName = "DESTINATION"/>
                        <DailyColumn columnName = "DESTINATION"/>
                        <DailyColumn columnName = "DESTINATION"/>

                    </Row>

                </div>
                {/* <DailyColumn className = "column2" columnName = "FOOD"/> */}



            </div>
        </div>
        
    )
}

export default EditDaily;