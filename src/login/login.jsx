import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const nagivate = useNavigate();

    const handleChangeUser = (e) => {
        setUser(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const validData = (e) => {
        nagivate('/dashboard');
    }


        
    return (
        <div className="container grid  mx-auto">
            <form className="space-y-4 md:space-y-6 formulario-login" onSubmit={validData}  style={{ padding: 2 }}>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">usuario</label>
                    <input type="text" value={user} onChange={handleChangeUser} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" value={password} onChange={handleChangePassword} placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log in</button>
            </form>
        </div>);
};

export default Login;
