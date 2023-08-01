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
    const fetchedBlogs = useSelector((state) => state.blog.blogs);
    console.log("Home Page States: ", state);
    console.log("Home Page Blogs: ", fetchedBlogs);

    

    return (
        <div className='px-20'>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mb-20 mt-16'>
                {
                    Array.isArray(fetchedBlogs) ?
                        
                    fetchedBlogs.map((blog, index) => <BlogsCard blog={blog} key={index}></BlogsCard>)

                        : ''
                }
            </div>
        </div>
    );
};

export default HomePage;