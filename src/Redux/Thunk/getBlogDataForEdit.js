import { editBlog } from "../Actions/blogAction";


const getBlogDataForEdit = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/allBlogs/blog/${id}`);
        const data = await res.json();
        console.log("Data For Edit: ", data);
        if (data) {
            dispatch(editBlog(data))
        }
    }
}

export default getBlogDataForEdit;