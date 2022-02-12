import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";


const DailyColumn = ({columnName}) => {

    return(

        <Container>
                <Col>
                    <Row>
                        <div className = 'columnBox'>
                            <h className='columnText'>{columnName}</h>
                        </div>
                    </Row>
                    <Row>
                        <input className='columnInput' type="text"></input>
                    </Row>
                </Col>
                
        </Container>
    );
};

export default DailyColumn;