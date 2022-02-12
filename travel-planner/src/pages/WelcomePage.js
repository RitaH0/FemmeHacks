import React, {useEffect, useState} from 'react';

const WelcomePage = () => {


    const [duration, setDuration] = useState("");

    sessionStorage.setItem("duration",duration);
    return (
        <div className="WelcomePage">
            {/* <h className="welcomeText">Welcome to your travel planner</h> */}

            <div className="WelcomePage__body">
                <h className="welcomeText">Welcome to your travel planner</h>
                <h className="durationText">Enter the duration of your trip: </h>
                <input className = 'durationInput' type="text" onChange = {event => setDuration(event.target.value)}/>

                <a href='/PlannerPage'>
                <button className = 'startButton'>Click to start</button>
                </a>
            </div>
        </div>
    );
}

export default WelcomePage;