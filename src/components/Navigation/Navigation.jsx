import React from "react";

const Navigation = ({ onRouteChange }) => {
    return (
        <nav className="flex justify-end">
            <p
                onClick={() => onRouteChange("signin")}
                className="underline text-blue-200 text-lg cursor-pointer transition-opacity duration-150 hover:opacity-80 active:opacity-60">Sign Out</p>
        </nav>
    );
}

export default Navigation;