import React from "react";
import "./FaceRecognition.css"

const FaceRecognition = ({ imageURL, box }) => {
    return (
        <div className="flex justify-center mt-8">
            <div className="relative">
                <img id="inputImage" className="max-w-[600px] max-h-[600px]"
                    src={imageURL} alt="" />
                <div className="bounding-box absolute"
                    style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;
