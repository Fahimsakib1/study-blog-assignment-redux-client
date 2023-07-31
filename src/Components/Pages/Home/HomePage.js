import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchBlogData from '../../../Redux/Thunk/fetchAllBlogs';
import BlogsCard from './BlogsCard';

const HomePage = () => {



    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBlogData())
    }, [dispatch])

    const state = useSelector((state) => state);
    console.log("Home Page State: ", state);

    return (
        <div className='px-20'>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mb-20 mt-16'>
                {
                    state.blog.blogs.map((blog, index) => <BlogsCard blog={blog} key={index}></BlogsCard>)
                }
            </div>
        </div>
    );
};

export default HomePage;