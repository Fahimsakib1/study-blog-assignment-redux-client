import React from 'react';
import { useSelector } from 'react-redux';

const SingleBlogDetailsPage = () => {

    const state = useSelector((state) => state);
    console.log("Single Blog View Details: ", state);




    return (
        <div>
            {/* <div className='w-3/4 mx-auto mt-16 mb-16 bg-white'>
                <div className='py-6 mb-2 md:px-4 px-3 '>

                    <h1 className='lg:px-10 md:px-6 px-1 flex justify-start text-black lg:text-2xl md:text-2xl text-xl font-bold mt-2'>{state.blog.blogs.title}</h1>

                    <p className='lg:px-10 md:px-6 px-1 flex justify-start text-gray-600 text-md font-bold'>Category: <span className='text-orange-600 ml-1'>{state.blog.blogs.category}</span></p>

                    <div className='mt-6 lg:w-3/4 mx-auto w-full text-center '>
                        <img src={state.blog.blogs.image} className='lg:px-16 md:px-8 px-2 text-center rounded-sm' alt='BlogPicture' />
                    </div>

                    <p className=' mt-4 md:text-[18px] text-[16px] text-gray-700 lg:px-8 md:px-6 px-2 text-justify'>{state.blog.blogs.description}</p>
                </div>
            </div> */}

            {
                state.blog.blogs.map((blog) =>

                    <div key={blog._id}>

                        <div className='w-3/4 mx-auto mt-16 mb-16 bg-white'>
                            <div className='py-6 mb-2 md:px-4 px-3 '>

                                <h1 className='lg:px-10 md:px-6 px-1 flex justify-start text-black lg:text-2xl md:text-2xl text-xl font-bold mt-2'>{blog.title}</h1>

                                <p className='lg:px-10 md:px-6 px-1 flex justify-start text-gray-600 text-md font-bold'>Category: <span className='text-orange-600 ml-1'>{blog.category}</span></p>

                                <div className='mt-6 lg:w-3/4 mx-auto w-full text-center '>
                                    <img src={blog.image} className='lg:px-16 md:px-8 px-2 text-center rounded-sm' alt='BlogPicture' />
                                </div>

                                <p className=' mt-4 md:text-[18px] text-[16px] text-gray-700 lg:px-8 md:px-6 px-2 text-justify'>{blog.description}</p>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default SingleBlogDetailsPage;