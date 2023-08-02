import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import postBlogData from "../../../Redux/Thunk/postBlogData";




const AddBlog = () => {


    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();

    const ISOSPostedDate =  new Date().toISOString();
    console.log("ISOS Date: ", ISOSPostedDate); 

    //code for getting the  time and date
    const dateForBlog = new Date();
    const year = dateForBlog.getFullYear();
    const month = dateForBlog.getMonth() + 1;
    const day = dateForBlog.getDate();
    const hour = dateForBlog.getHours();
    const minute = dateForBlog.getMinutes();
    const currentTime = dateForBlog.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const MonthDateYear = [day, month, year].join('-');
    const BlogPostedTime = currentTime + ' ' + MonthDateYear;
    console.log("Date: ", BlogPostedTime);

    
    
    
    // 2023-08-01T18:36:45.235Z
    // 2023-06-23T10:26:00.996Z
    // 2023-05-15T10:09:52.523Z
    // 2023-04-27T19:05:12.541Z
    // 2023-07-20T18:36:45.239Z
    // 2023-06-11T23:26:10.947Z
    // 2023-03-19T22:05:42.123Z
    // 2023-01-22T16:07:22.421Z


    const submit = (data) => {

        const blog = {
            title: data.title,
            image: data.image,
            category: data.category,
            blogPostedTime: BlogPostedTime,
            ISOSPostedDate: ISOSPostedDate,
            description: data.description,
        };
        console.log("Added Blog", blog);
        dispatch(postBlogData(blog))
        reset();
    };




    return (
        <div>

            <h1 className='text-center font-bold text-xl text-blue-600 mt-6'>Add Blog</h1>

            <div className='flex justify-center items-center h-full mt-6'>
                <form
                    className='shadow-lg px-6 py-4 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                    onSubmit={handleSubmit(submit)}
                >
                    <div className="form-control w-full mb-1">
                        <label className="label">
                            <span className="label-text font-semibold ">Blog title</span>
                        </label>

                        <input type="text"  {...register("title")}
                            placeholder="Enter Blog title" className="text-gray-700 font-semibold input input-bordered w-full" />
                    </div>



                    <div className="form-control w-full mb-1">
                        <label className="label">
                            <span className="label-text font-semibold ">Image Link</span>
                        </label>

                        <input type="text"  {...register("image")}
                            placeholder="Enter Image Title" className="text-gray-700 font-semibold input input-bordered w-full" />
                    </div>


                    <div className="form-control w-full mb-1">
                        <label className="label mb-3" htmlFor='category'>
                            <span className="label-text font-semibold"> Blog Category</span>
                        </label>

                        <select
                            name='category' id='category' {...register("category")}
                            type="text" className="font-semibold select select-bordered w-full text-gray-600">
                            <option value='visa '>Visa</option>
                            <option value='scholarship'>Scholarship</option>
                            <option value='study'>Study </option>
                            <option value='programs'>Programs</option>
                            <option value='abroad'>Abroad</option>
                            <option value='others'>Others</option>
                        </select>

                    </div>

                    <div className='flex flex-col w-full'>
                        <label className='mb-2 font-semibold' htmlFor='description'>
                            Description
                        </label>
                        <textarea type="text" name='description' id='description' placeholder="Write Blog Description" className="text-gray-700 font-semibold textarea textarea-bordered textarea-md w-full" {...register("description")} ></textarea>
                    </div>


                    <div className='flex justify-between items-center w-full'>
                        <button
                            className=' mt-3 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                            type='submit'
                        >
                            Add Blog
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;
