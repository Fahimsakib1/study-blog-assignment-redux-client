import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchBlogByIDForViewDetails from '../../../Redux/Thunk/fetchBlogByIDForViewDetails';
import { addToHistory } from '../../../Redux/Actions/blogAction';

const HistoryCard = ({ blog }) => {


    const dispatch = useDispatch();



    return (
        <div className='lg:px-44 md:px-6 px-3 mb-6 '>
            <div className="px-6 py-3 bg-white shadow-2xl">
                <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-4 md:flex-row">
                    <img src={blog.image} alt="" className="self-center w-40 h-48 border rounded-sm md:justify-self-start " />
                    <div className="flex flex-col">

                        <div className='flex justify-between items-center lg:flex-row md:flex-col flex-col lg:gap-y-0 gap-y-2'>
                            <h4 className=" text-blue-800  text-lg font-bold text-center md:text-left">{blog.title}</h4>
                            <h1 className=' text-black font-semibold flex justify-center gap-x-2 items-center text-center'>
                                Read <span className='bg-green-600 rounded-full font-bold px-3 py-1 text-white'>{blog.read}</span> Times
                            </h1>
                        </div>
                        <h1 className='font-bold -mt-1 mb-2'>Category: <span className='text-orange-600 capitalize'>{blog.category}</span></h1>

                        <p className="text-gray-600 font-semibold text-justify">{blog.description.slice(0, 230)}
                            <Link to='/blogDetails'>
                                <span className='text-blue-700 font-semibold cursor-pointer'   onClick={(() => { dispatch(fetchBlogByIDForViewDetails(blog._id)); dispatch(addToHistory(blog)) })}> ...Read More</span>
                            </Link>
                        </p>

                        <Link to='/blogDetails'>
                            <div className=' flex gap-2 mt-3 '>
                                <button
                                    onClick={(() => { dispatch(fetchBlogByIDForViewDetails(blog._id)); dispatch(addToHistory(blog)) })}
                                    className='hover:bg-blue-900 bg-blue-950 w-full py-1 text-lg rounded-sm px-2 flex-1 text-white text-bold'
                                >
                                    Read Again
                                </button>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryCard;