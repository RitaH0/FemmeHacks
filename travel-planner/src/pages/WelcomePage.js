import React from "react";
import backPic from '../images/welcomeBackgroundPic.png';
const WelcomePage = () => {

    // const setBackground = () =>{
    //     document.getElementById("welcomeBackground").
    // }
    return (
        <div className="WelcomePage">
            {/* <h className="welcomeText">Welcome to your travel planner</h> */}

            <div className="WelcomePage__body">
                <h className="welcomeText">Welcome to your travel planner</h>

                    {/* <img className = "backPic" src = {backPic}/> */}

                {/* <h className="welcomeText">Welcome to your travel planner</h> */}
                <a href='/PlannerPage'>
                <button className = 'startButton'>Click to start</button>
                </a>
            </div>
        </div>
    );
}

export default WelcomePage;