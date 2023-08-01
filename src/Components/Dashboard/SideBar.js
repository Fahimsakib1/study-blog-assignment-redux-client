import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import fetchBlogData from "../../Redux/Thunk/fetchAllBlogs";



const SideBar = () => {
    
    
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchBlogData())
    // }, [dispatch])

    const state = useSelector((state) => state);
    console.log("Side Bar States: ", state);
    
    
    
    return (
        <div className='col-span-2 bg-gray-800 h-[calc(100vh-25px)] p-5 rounded-sm'>
            <ul className='flex gap-3  flex-col h-full'>
                <li className="text-center font-bold uppercase mb-6 text-white">Admin Dashboard</li>

                <Link  to='/dashboard' className='text-white font-semibold cursor-pointer hover:bg-gray-400 hover:text-gray-900 hover:rounded-md p-2'>
                    <li className="">All Blogs List</li>
                </Link>

                <Link to='/dashboard/addBlog' className='text-white font-semibold cursor-pointer hover:bg-gray-400 hover:text-gray-900 hover:rounded-md p-2'>
                    <li className=""> Add Study Blog </li>
                </Link>

                <Link  to='/'  className='text-white font-semibold cursor-pointer hover:bg-gray-400 hover:text-gray-900 hover:rounded-md p-2 mt-auto '>
                    <li className=""> Back to Home </li>
                </Link>

            </ul>
        </div>
    );
};

export default SideBar;
