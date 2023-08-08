import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FiEdit } from 'react-icons/fi';
import { Link } from "react-router-dom";
import fetchBlogData from '../../../Redux/Thunk/fetchAllBlogs';
import deleteBlog from '../../../Redux/Thunk/deleteBlog';
import getBlogDataForEdit from '../../../Redux/Thunk/getBlogDataForEdit';








const AllBlogsList = () => {

    const fetchedAllBlogs = useSelector((state) => state.blog.blogs);
    const state = useSelector((state) => state);
    console.log("Blogs in All Blogs List Page", fetchedAllBlogs);
    console.log("State in All Blogs List Page", state);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBlogData())
    }, [dispatch]);





    return (
        <div>

            <div className='flex flex-col justify-center items-center h-full w-full '>
                <div className='mt-10 w-full max-w-6xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
                    <header className='px-5 py-4 border-b border-gray-100'>
                        <div className=' text-blue-700 text-center font-bold text-lg '>Total Added Blogs {fetchedAllBlogs && fetchedAllBlogs?.length}</div>
                    </header>

                    <div className='overflow-x-auto p-3'>
                        <table className='table-auto w-full'>
                            <thead className='text-xs font-semibold  uppercase text-white bg-gray-600'>
                                <tr>
                                    <th className='p-2 '>
                                        <div className='font-semibold text-left'>Blog Title</div>
                                    </th>
                                    <th className='p-2 '>
                                        <div className='font-semibold text-left'>Category</div>
                                    </th>
                                    <th className='p-2 '>
                                        <div className='font-semibold text-left'>Posted Time</div>
                                    </th>
                                    <th className='p-2'>
                                        <div className='font-semibold text-center'>Action</div>
                                    </th>
                                </tr>
                            </thead>

                            <tbody className='text-sm divide-y divide-gray-100'>
                                {Object.values(state.blog.blogs).map(({ title, category, blogPostedTime, description, _id }) => (
                                    <tr>
                                        <td className='p-2'>
                                            <div className='font-medium text-gray-800'>{title}</div>
                                        </td>
                                        <td className='p-2'>
                                            <div className='font-medium text-left capitalize'>{category}</div>
                                        </td>
                                        <td className='p-2'>
                                            <div className='font-medium text-left capitalize'>{blogPostedTime}</div>
                                        </td>
                                        <td className='p-2  -ml-16'>
                                            <div className=' flex justify-around items-center'>


                                                <button onClick={() => dispatch(deleteBlog(_id))} className='cursor-pointer' title='Delete Blog'>
                                                    <svg
                                                        className="text-red-600 w-8 h-8 rounded-full  p-1  hover:bg-gray-300"
                                                        fill='none'
                                                        stroke='currentColor'
                                                        viewBox='0 0 24 24'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                    >
                                                        <path
                                                            stroke-linecap='round'
                                                            stroke-linejoin='round'
                                                            stroke-width='2'
                                                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                                                        ></path>
                                                    </svg>
                                                </button>

                                                <Link onClick={() => dispatch(getBlogDataForEdit(_id))}  to='/dashboard/editBlog'>
                                                    <div  title='Edit Blog' className='cursor-pointer p-2 hover:text-blue-600 hover:bg-gray-300 rounded-full'>
                                                        <FiEdit className="text-xl font-semibold"></FiEdit>
                                                    </div>
                                                </Link>


                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBlogsList;