import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";


const DailyColumn = ({
    columnName, day
}) => {


    const [destination, setDestination] = useState(" ");
    const [food, setFood] = useState(" ");
    const [leisure, setLeisure] = useState(" ");
    const [transportation, setTransportation] = useState(" ");

    // console.log(destination)
    // console.log(leisure)
    sessionStorage.setItem("destination",destination);
    sessionStorage.setItem("food",food);
    sessionStorage.setItem("leisure",leisure);
    sessionStorage.setItem("transportation",transportation);

    document.getElementById('Destination').value = "hi";


    // sessionStorage.setItem({day}+"destination",destination);
    // console.log(destination)
    // sessionStorage.setItem({day}+"food",food);
    // sessionStorage.setItem({day}+"leisure",leisure);
    // sessionStorage.setItem({day}+"transportation",transportation);

    ;
    useEffect(()=>{
        document.getElementById('Destination').value = "hi";

        // console.log(sessionStorage.getItem({day}+"destination") || " ")

        // document.getElementById('Destination').value = sessionStorage.getItem({day}+"destination") || " ";

    })
    if (columnName == 'Destination'){
        return(
            <Container>
                    <Col>
                        <Row>
                            <div className = 'columnBox'>
                                <h className='columnText'>{columnName}</h>
                            </div>
                        </Row>
                        <Row>
                            <input id = "Destination"className='columnInput' type="text" onChange = {event => setDestination(event.target.value)}></input>
                        </Row>
                    </Col>
                    
            </Container>
        );
    }
    else if (columnName == 'Food'){
        return(
            <Container>
                    <Col>
                        <Row>
                            <div className = 'columnBox'>
                                <h className='columnText'>{columnName}</h>
                            </div>
                        </Row>
                        <Row>
                            <input className='columnInput' type="text" onChange = {event => setFood(event.target.value)}></input>
                        </Row>
                    </Col>
                    
            </Container>
        );
    }
    else if (columnName == 'Leisure'){
        return(
            <Container>
                    <Col>
                        <Row>
                            <div className = 'columnBox'>
                                <h className='columnText'>{columnName}</h>
                            </div>
                        </Row>
                        <Row>
                            <input className='columnInput' type="text" onChange = {event => setLeisure(event.target.value)}></input>
                        </Row>
                    </Col>
                    
            </Container>
        );
    }
    else if (columnName == 'Transportation'){
        return(
            <Container>
                    <Col>
                        <Row>
                            <div className = 'columnBox'>
                                <h className='columnText'>{columnName}</h>
                            </div>
                        </Row>
                        <Row>
                            <input className='columnInput' type="text" onChange = {event => setTransportation(event.target.value)}></input>
                        </Row>
                    </Col>
                    
            </Container>
        );
    }


};

export default DailyColumn;