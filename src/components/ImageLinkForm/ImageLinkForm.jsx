import React from "react";

const ImageLinkForm = () => {
    return (
        <div className="flex flex-col items-center mt-20">
            <p className="text-blue-300 text-lg text-center">
                This magic brain will detect faces in your pictures
            </p>
            <div className="flex flex-col mt-4 sm:flex-row sm:justify-center">
                <input className="block mb-2 sm:mr-2 sm:mb-0 px-4 py-2 rounded-lg text-gray-800 w-full sm:w-72" type="text" placeholder="Picture link" />
                <button className="px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 w-full sm:w-auto">Detect</button>
            </div>
        </div>
    );
}

export default ImageLinkForm;