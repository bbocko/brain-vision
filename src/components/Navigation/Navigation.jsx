import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
    return isSignedIn ? (
        <nav className="flex justify-end">
            <p
                onClick={() => onRouteChange("signin")}
                className="underline p-2 text-blue-200 text-lg cursor-pointer transition-opacity duration-150 hover:opacity-80 active:opacity-60"
            >
                Sign Out
            </p>
        </nav>
    ) : <nav className="flex justify-end">
        <p
            onClick={() => onRouteChange("signin")}
            className="underline p-2 text-blue-200 text-lg cursor-pointer transition-opacity duration-150 hover:opacity-80 active:opacity-60"
        >
            Sign In
        </p>
        <p
            onClick={() => onRouteChange("register")}
            className="underline p-2 text-blue-200 text-lg cursor-pointer transition-opacity duration-150 hover:opacity-80 active:opacity-60"
        >
            Register
        </p>
    </nav>

};

export default Navigation;