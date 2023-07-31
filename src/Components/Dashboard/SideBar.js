import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className='col-span-2 bg-indigo-200 h-[calc(100vh-25px)] p-5 rounded-lg'>
            <ul className='flex gap-3  flex-col h-full'>
                <li className="text-center font-bold uppercase mb-6">Admin Dashboard</li>

                <Link to='/dashboard' className='font-semibold cursor-pointer hover:bg-gray-400 hover:rounded-md p-2'>
                    <li >All Blogs List</li>
                </Link>

                <Link to='/dashboard/addBlog' className='font-semibold cursor-pointer hover:bg-gray-400 hover:rounded-md p-2'>
                    <li > Add Study Blog </li>
                </Link>

                <Link to='/' className='font-semibold mt-auto cursor-pointer hover:bg-gray-400 hover:rounded-md p-2'>
                    <li> Back to Home </li>
                </Link>

            </ul>
        </div>
    );
};

export default SideBar;
