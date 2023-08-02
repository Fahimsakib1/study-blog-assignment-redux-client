import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import fetchBlogsByCategory from '../Redux/Thunk/fetchBlogsByCategory';
import fetchBlogData from '../Redux/Thunk/fetchAllBlogs';




const NavBar = () => {


    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    console.log("States on Navbar: ", state);

    const [search, setSearch] = useState("")
    const handleSearchByCategory = () => {
        console.log("Search:", search);
        dispatch(fetchBlogsByCategory(search.toLowerCase()))
    }

    const handleClearSearch = () => {
        setSearch("")
        dispatch(fetchBlogData())
    }


    return (
        <div>

            <nav className='h-14 bg-indigo-200 rounded-sm m-2 max-w-7xl mx-auto px-5'>
                <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900'>
                    <Link to='/' className=''>
                        <h1 className='text-2xl cursor-pointer'>Study Blogs</h1>
                    </Link>

                    <li className='flex bg-white mx-auto h-10 w-full max-w-lg  rounded-md pr-3'>
                        <input
                            placeholder='Search By Category'
                            onChange={(e) => setSearch(e.target.value)}
                            className='px-4 h-10 rounded-md w-full text-sm border-0 '
                            type='text'
                            value ={search}
                        />

                        <button onClick={handleSearchByCategory} className="ml-4 text-white bg-blue-600 hover:bg-blue-700 px-4 text-sm rounded-sm ">
                            Search
                        </button>

                        <ImCancelCircle onClick={handleClearSearch} className="ml-3 cursor-pointer text-[39px] text-gray-600 hover:text-red-600"></ImCancelCircle>


                    </li>
                    <li className='hover:text-red-600'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='hover:text-red-600'>
                        <Link to='/history'>History</Link>
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