import React from "react";

const RegisterForm = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <h2 className="text-blue-200 text-3xl font-bold mb-6">Register</h2>
            <form className="bg-gray-900 pt-12 pb-12 mt-2 mb-4 rounded-lg text-center px-8 md:px-24">
                <div className="mb-4">
                    <label className="block text-gray-300 font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-300 font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" />
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 active:opacity-80" type="button">
                        Register
                    </button>
                </div>
            </form>
            <p className="text-blue-200 text-sm">
                Already have an account? <a href="#" className="text-blue-500">Sign In</a>
            </p>
        </div>
    );
}

export default RegisterForm;