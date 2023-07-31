import React from 'react';
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";











const NavBar = () => {
    return (
        <div>

            <nav className='h-14 bg-indigo-200 rounded-sm m-2 max-w-7xl mx-auto px-5'>
                <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900'>
                    <Link to='/' className=''>
                        <h1 className='text-2xl cursor-pointer'>Study Blogs</h1>
                    </Link>

                    <li className='flex bg-white mx-auto h-10 w-full max-w-lg  rounded-md pr-3'>
                        <input
                            className='h-10 rounded-md w-full text-sm border-0 '
                            type='text'
                        />

                        <button className="ml-4 text-white bg-blue-600 hover:bg-blue-700 px-4 text-sm rounded-sm ">
                            Search
                        </button>

                        <ImCancelCircle className="ml-3 cursor-pointer text-[39px] text-gray-600 hover:text-red-600"></ImCancelCircle>


                    </li>
                    <li className='hover:text-red-600'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='hover:text-red-600'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='hover:text-red-600'>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                    <Link to='/'>
                        <li title='' className='bg-indigo-500 p-2 rounded-full'>
                            <BsFillCartFill className='text-white ' />
                        </li>
                    </Link>
                </ul>
            </nav>

        </div>
    );
};

export default NavBar;