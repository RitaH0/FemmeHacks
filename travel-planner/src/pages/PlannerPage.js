import React, {useEffect, useState} from 'react';
import {Col, Row, Button} from "react-bootstrap";

const PlannerPage = () =>{

    // const [duration, setDuration] = useState("");
    var duration = sessionStorage.getItem("duration")
    return(
        <div className = "PlannerPage">
            <div className = "PlannerPage__body"> 

             <h>planner page</h>
            <h>{duration}</h>
            </div>
        </div>
    )
}

export default PlannerPage;