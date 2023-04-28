import React from "react";

const Navigation = () => {
    return (
        <nav className="flex justify-end">
            <p className="underline text-blue-200 text-lg cursor-pointer transition-opacity duration-200 hover:opacity-80 active:opacity-60">Sign Out</p>
        </nav>
    );
}

export default Navigation;