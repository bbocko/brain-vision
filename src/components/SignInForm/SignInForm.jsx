import React, { useState } from "react";

const SignInForm = ({ onRouteChange }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:3000/signin", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data === "Successfully signed in") {
                    onRouteChange("home");
                }
            })
    };

    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <h2 className="text-blue-200 text-3xl font-bold mb-6">Sign In</h2>
            <form className="bg-gray-900 pt-12 pb-12 mt-2 mb-4 rounded-lg text-center px-8 md:px-24"
                onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-300 font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        value={email} // Set the value prop to the email state
                        onChange={handleEmailChange} // Set the onChange prop to handleEmailChange
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-300 font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        value={password} // Set the value prop to the password state
                        onChange={handlePasswordChange} // Set the onChange prop to handlePasswordChange
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 active:opacity-80"
                        type="submit">
                        Sign In
                    </button>
                </div>
            </form>
            <p className="text-blue-200 text-sm">
                New here? <a
                    onClick={() => onRouteChange("register")}
                    className="text-blue-500 cursor-pointer">Create your account</a>
            </p>
        </div>
    );
}

export default SignInForm;