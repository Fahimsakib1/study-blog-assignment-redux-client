import React from "react";
import { useForm } from "react-hook-form";




const AddBlog = () => {


    const { register, handleSubmit, reset } = useForm();


    const submit = (data) => {

        const blog = {
            model: data.model,
            image: data.image,
            status: data.status === "true" ? true : false,
            brand: data.brand,
            keyFeature: [
                data.keyFeature1,
                data.keyFeature2,
                data.keyFeature3,
                data.keyFeature4,
            ],
            price: data.price,
            spec: [],
            rating: 5
        };

        console.log("Added Blog", blog);
        reset();
    };




    return (
        <div>

            <h1 className='text-center font-bold text-xl text-blue-600 mt-6'>Add Blog</h1>

            <div className='flex justify-center items-center h-full mt-6'>
                <form
                    className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
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
                            <option value='visaScholarship'>Visa & Scholarship</option>
                            <option value='studyAbroad'>Study Abroad</option>
                            <option value='studyprograms'>Study Programs</option>
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
                            className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
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
