import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchBlogData from '../../../Redux/Thunk/fetchAllBlogs';
import BlogsCard from './BlogsCard';
import sortBlogsByFirstUpload from '../../../Redux/Thunk/sortBlogsByFirstUpload';
import sortBlogsByLastUpload from '../../../Redux/Thunk/sortBlogsByLastUpload';
import clearAllFiltersData from '../../../Redux/Thunk/clearAllFiltersData';





const HomePage = () => {


    const activeClass = "text-white bg-blue-600 hover:bg-blue-700 border-white";


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBlogData())
    }, [dispatch])

    const state = useSelector((state) => state);
    const fetchedBlogs = useSelector((state) => state.blog.blogs);
    // console.log("Home Page All States: ", state);
    console.log("Home Page Blogs: ", fetchedBlogs);






    let number = 1;
    const queryType = 1;
    let contentMessage;

    if (state.blog.number === 1) {
        contentMessage = "Sorted By First Upload"
    }
    else if (state.blog.number === -1) {
        contentMessage = "Sorted By Last Upload"
    }
    else {
        contentMessage = "All Available Blogs"
    }
    console.log("Home Page All States: ", state);


    return (
        <div className='px-20'>

            <div className='px-20 mt-10 flex justify-end gap-5'>

                <button onClick={() => dispatch(sortBlogsByFirstUpload(number))}
                    className={`${state.blog.number === 0 && 'hover:bg-gray-300'} ${state.blog.number === -1 && 'hover:bg-gray-300'} rounded-md cursor-pointer border px-3 py-2  font-semibold ${state.blog.number === 1 ? activeClass : null}`}
                >
                    First Upload
                </button>


                <button onClick={() => dispatch(sortBlogsByLastUpload(number))}
                    className={`${state.blog.number === 0 && 'hover:bg-gray-300'} ${state.blog.number === 1 && 'hover:bg-gray-300'}  rounded-md cursor-pointer border px-3 py-2  font-semibold  ${state.blog.number === -1 ? activeClass : null}`}
                >
                    Last Upload
                </button>

                <button
                    onClick={() => dispatch(clearAllFiltersData(queryType))}
                    title='Clear All Filters'
                    className={`px-3 py-1 rounded-sm bg-red-600 hover:bg-red-700 text-white font-semibold`}
                >
                    Clear All Filters
                </button>
            </div>




            <>
                <div className='text-center text-xl mt-6 mb-2 text-blue-700 font-bold'>
                    {
                        contentMessage
                    }
                </div>

                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mb-20 mt-8'>
                    {
                        Array.isArray(fetchedBlogs) ?
                            fetchedBlogs.map((blog, index) => <BlogsCard blog={blog} key={index}></BlogsCard>)
                            : ''
                    }
                </div>

            </>



        </div>
    );
};

export default HomePage;