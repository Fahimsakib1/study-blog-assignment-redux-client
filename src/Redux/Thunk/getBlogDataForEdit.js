import { editBlog } from "../Actions/blogAction";


const getBlogDataForEdit = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://study-abroad-blogs-redux-server.vercel.app/allBlogs/blog/${id}`);
        const data = await res.json();
        console.log("Data For Edit: ", data);
        if (data) {
            dispatch(editBlog(data))
        }
    }
}

export default getBlogDataForEdit;