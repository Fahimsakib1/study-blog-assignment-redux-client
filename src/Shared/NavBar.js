import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FaHistory } from "react-icons/fa";
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

    const { pathname } = useLocation();


    return (
        <div>

            <nav className='mt-3 h-14 bg-gray-800 rounded-sm m-2 max-w-7xl mx-auto px-5'>
                <ul className='h-full  mx-auto flex justify-between items-center gap-4 font-semibold text-white'>
                    <Link to='/' className=''>
                        <h1 className='text-2xl cursor-pointer text-orange-500'>Study Blogs</h1>
                    </Link>

                    {
                        !pathname.includes('history') &&
                        <li className='ml-32 flex bg-white text-black mx-auto h-10 md:w-[450px] w-3/4 max-w-lg  rounded-sm pr-3'>
                            <input
                                placeholder='Search By Category'
                                onChange={(e) => setSearch(e.target.value)}
                                className='px-4 h-10 rounded-md w-full text-sm border-0 '
                                type='text'
                                value={search}
                            />

                            <button onClick={handleSearchByCategory} className="ml-4 text-white bg-blue-600 hover:bg-blue-700 px-6 text-sm rounded-sm ">
                                Search
                            </button>

                            <ImCancelCircle onClick={handleClearSearch} className="ml-3 cursor-pointer text-[39px] text-gray-600 hover:text-red-600"></ImCancelCircle>
                        </li>
                    }



                    <li className='hover:text-orange-500'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='hover:text-orange-500 ml-8'>
                        <Link to='/history'>Reading History</Link>
                    </li>
                    <li className='hover:text-orange-500 ml-8'>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                    <Link to='/history'>
                        <li title='Visit History Page' className='ml-6 scale-95 hover:scale-100 cursor-pointer bg-indigo-500 p-[10px] text-[23px] rounded-full'>
                            <FaHistory className='text-white ' />
                        </li>
                    </Link>




                </ul>
            </nav>

        </div>
    );
};

export default NavBar;