import React from "react";
import { Link } from 'react-router-dom';

const Days = ({
    day
}) => {
    return(
        <Link type = "button" className = "btn"to = {{
            pathname: "/EditDaily",
            state: "hi",
        }}>
            <p className = "btnName">{day}</p>
        </Link>
    )
}

export default Days;