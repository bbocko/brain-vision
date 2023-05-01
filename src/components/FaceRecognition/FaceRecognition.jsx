import React from "react";

const FaceRecognition = ({ imageURL }) => {
    return (
        <div className="flex justify-center mt-5">
            <img className="max-w-[500px] max-h-[500px]"
                src={imageURL} alt="" />
        </div>
    );
}

export default FaceRecognition;