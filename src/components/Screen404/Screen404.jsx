import React from "react";

const Screen404 = ({ onRouteChange }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-blue-200 text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
            <h2 className="text-blue-200 text-xl">The page you're looking for doesn't exist.</h2>
            <button
                onClick={() => onRouteChange("signin")}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-8 rounded transition duration-150 active:opacity-80">
                Go Home
            </button>
        </div>
    );
}

export default Screen404;
