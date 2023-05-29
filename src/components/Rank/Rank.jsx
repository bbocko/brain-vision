import React from "react";

const Rank = ({ name, entries }) => {
    return (
        <div className="my-10">
            <div className="text-blue-200 text-xl text-center">
                {`${name}, your current entry count is: `}
                <span className="text-blue-200 text-2xl">
                    {entries}
                </span>
            </div>
        </div>
    );
}

export default Rank;