import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./robo-brain.png";

const Logo = () => {
    return (
        <div className="flex justify-start m-4">
            <Tilt>
                <div style={{ height: '100px', width: '100px' }}>
                    <img src={brain} alt="logo"></img>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;