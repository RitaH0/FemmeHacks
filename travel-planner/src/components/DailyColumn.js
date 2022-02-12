import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";


const DailyColumn = ({columnName}) => {

    return(
        <div>
            <div>
                <div className = 'columnBox'>
                    <h className='columnText'>{columnName}</h>
                </div>
                <input className='columnInput' type="text"></input>

            </div>
        </div>
    );
};

export default DailyColumn;