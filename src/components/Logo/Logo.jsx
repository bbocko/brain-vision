import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./robo-brain.png";

const Logo = () => {
    return (
        <div className="flex justify-center m-5">
            <Tilt>
                <div style={{ height: '120px', width: '120px' }}>
                    <img src={brain} alt="logo"></img>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;