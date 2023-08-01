import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import updateBlogDataByID from "../../../Redux/Thunk/updateBlogDataByID";
import { useNavigate } from "react-router-dom";




const EditBlog = () => {


    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    console.log("Sates On Edit Blog Page: ", state);

    const { _id, title, category, image, description} = state.blog.blogs


    //code for getting the  time and date
    const dateForBlog = new Date();
    const year = dateForBlog.getFullYear();
    const month = dateForBlog.getMonth() + 1;
    const day = dateForBlog.getDate();
    const hour = dateForBlog.getHours();
    const minute = dateForBlog.getMinutes();
    const currentTime = dateForBlog.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const MonthDateYear = [day, month, year].join('-');
    const BlogUpdatedTime = currentTime + ' ' + MonthDateYear;
    console.log("Date: ", BlogUpdatedTime);


    const navigate  = useNavigate();


    const submit = (data) => {

        const blog = {
            title: data.title ? data.title : title,
            image: data.image ? data.image : image,
            category: data.category ? data.category : category,
            blogUpdatedTime: BlogUpdatedTime,
            description: data.description ? data.description : description,
        };
        dispatch(updateBlogDataByID(_id, blog))
        console.log("Edited Blog Details: ", blog);
        reset();
        // navigate('/')
    };


    




    return (
        <div>

            <h1 className='text-center font-bold text-xl text-orange-600 mt-6'>Edit Blog</h1>


            <div className='flex justify-center items-center h-full mt-6'>
                <form
                    className='shadow-lg px-6 py-4 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                    onSubmit={handleSubmit(submit)}
                >
                    <div className="form-control w-full mb-1">
                        <label className="label">
                            <span className="label-text font-semibold ">Blog title</span>
                        </label>

                        <input defaultValue={state.blog.blogs.title} type="text" {...register("title")}
                            placeholder="Enter Blog title" className="text-gray-700 font-semibold input input-bordered w-full" />
                    </div>



                    <div className="form-control w-full mb-1">
                        <label className="label">
                            <span className="label-text font-semibold ">Image Link</span>
                        </label>

                        <input defaultValue={state.blog.blogs.image} type="text"  {...register("image")}
                            placeholder="Enter Image Title" className="text-gray-700 font-semibold input input-bordered w-full" />
                    </div>


                    <div className="form-control w-full mb-1">
                        <label className="label mb-3" htmlFor='category'>
                            <span className="label-text font-semibold"> Blog Category</span>
                        </label>

                        <select
                            name='category' id='category' {...register("category")}
                            type="text" className="font-semibold select select-bordered w-full text-gray-600">
                            <option selected={state.blog.blogs.category === "visaScholarship" && "Visa & Scholarship"} value='visaScholarship'>Visa & Scholarship</option>
                            <option selected={state.blog.blogs.category === "studyAbroad" && "Study Abroad"} value='studyAbroad'>Study Abroad</option>
                            <option selected={state.blog.blogs.category === "studyProgram" && "Study Programs"} value='studyprogram'>Study Programs</option>
                            <option selected={state.blog.blogs.category === "others" && "Others"} value='others'>Others</option>
                        </select>

                    </div>

                    <div className='flex flex-col w-full'>
                        <label className='mb-2 font-semibold' htmlFor='description'>
                            Description
                        </label>
                        <textarea defaultValue={state.blog.blogs.description} type="text" name='description' id='description' placeholder="Write Blog Description" className="text-gray-700 font-semibold textarea textarea-bordered textarea-md w-full" {...register("description")} ></textarea>
                    </div>


                    <div className='flex justify-between items-center w-full'>
                        <button
                            className=' mt-3 px-4 py-3 bg-orange-600 hover:bg-orange-700 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                            type='submit'
                        >
                            Edit Done
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditBlog;
