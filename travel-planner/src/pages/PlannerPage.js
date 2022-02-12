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
                <a href='/ExpensePage'>
                <button className = 'expenseButton'>Track expense</button>
                </a>

                </Row>
            </Container>
            {showDays()}
            {elements}



 

            </div>
        </div>
    )
}

export default PlannerPage;