import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchBlogByIDForViewDetails from '../../../Redux/Thunk/fetchBlogByIDForViewDetails';
import { Link, useLocation } from 'react-router-dom';
import { addToHistory } from '../../../Redux/Actions/blogAction';

const BlogsCard = ({ blog }) => {


    const dispatch = useDispatch();
    const { pathname } = useLocation();

    return (
        <div className=''>

            <div className="card card-compact w-96 bg-white shadow-2xl rounded-md">

                {
                    pathname.includes("history") &&
                    <div className='bg-gray-800 h-[40px] text-white font-semibold flex justify-center gap-x-2 items-center mb-3 text-center'>
                        Read <span className='bg-blue-700 rounded-full font-bold px-3 py-1 text-white'>{blog.read}</span> Times
                    </div>
                }

                {
                    pathname.includes("history") &&
                    <div className='px-3 mb-3 '>
                        <h2 className="text-[16px] mb-1 font-bold text-indigo-800">{blog?.title && blog.title.length > 50 ? blog.title.slice(0, 40) : blog.title}
                            {
                                blog.title.length > 50 &&
                                <Link onClick={(() => {dispatch(fetchBlogByIDForViewDetails(blog._id)); dispatch(addToHistory(blog))})} to='/blogDetails'>
                                    <span className='text-blue-700 font-semibold cursor-pointer'>...</span>
                                </Link>
                            }
                        </h2>

                        <div className='flex justify-between items-center lg:flex-row md:flex-col flex-col lg:gap-y-0 gap-y-2'>
                            <p className='text-sm text-gray-700 font-semibold text-left '><span className='font-bold text-black'>Date:</span> {blog.blogPostedTime}</p>

                            <h1 className='font-bold text-center'>Category: <span className='text-orange-600 capitalize'>{blog.category}</span></h1>
                        </div>
                    </div>
                }

                <figure><img src={blog.image} className="h-48 w-full" alt="Blog Pic" /></figure>
                <div className="card-body">
                    {
                        !pathname.includes('history') &&
                        <>
                            <h2 className=" text-lg font-bold text-blue-700">{blog?.title && blog.title.slice(0, 36)}
                                <Link onClick={(() => dispatch(fetchBlogByIDForViewDetails(blog._id)))} to='/blogDetails'>
                                    <span className='text-blue-700 font-semibold cursor-pointer'>...</span>
                                </Link>
                            </h2>
                        </>
                    }
                    {
                        !pathname.includes('history') &&
                        <p className='text-sm text-gray-700 font-semibold text-left -mt-2'>Posted On: {blog.blogPostedTime}</p>
                    }

                    {
                        !pathname.includes('history') &&
                        <h1 className='font-bold text-center mt-2 text-lg'>Category: <span className='text-orange-600 text-semibold capitalize'>{blog.category}</span></h1>
                    }


                    {
                        !pathname.includes('history') &&
                        <p className='mt-2  font-semibold mb-3 text-justify'>{blog?.description && blog.description.slice(0, 186)}
                            <Link to='/blogDetails'>
                                <span className='text-blue-700 font-semibold cursor-pointer' onClick={(() => dispatch(fetchBlogByIDForViewDetails(blog._id)))}>... Read More</span>
                            </Link>
                        </p>
                    }



                    {
                        pathname.includes('history') &&
                        <Link to='/blogDetails'>
                            <div className='flex gap-2 mt-1 '>
                                <button
                                    onClick={(() => { dispatch(fetchBlogByIDForViewDetails(blog._id)); dispatch(addToHistory(blog)) })}
                                    className='hover:bg-indigo-600 bg-indigo-700 w-full py-2 text-lg rounded-sm px-2 flex-1 text-white text-bold'
                                >
                                    Read Again
                                </button>
                            </div>
                        </Link>
                    }


                    {
                        !pathname.includes('history') &&
                        <Link to='/blogDetails'>
                            <div className='flex gap-2 mt-5 '>
                                <button
                                    onClick={(() => { dispatch(fetchBlogByIDForViewDetails(blog._id)); dispatch(addToHistory(blog)) })}
                                    className='hover:bg-blue-800 bg-blue-700 w-full py-2 text-lg rounded-sm px-2 flex-1 text-white text-bold'
                                >
                                    View Details
                                </button>
                            </div>
                        </Link>
                    }
                </div>
            </div>




        </div>
    );
};

export default BlogsCard;