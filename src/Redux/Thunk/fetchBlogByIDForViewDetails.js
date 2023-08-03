import { getSingleBlog, singleBlogDataForEdit} from "../Actions/blogAction";

const fetchBlogByIDForViewDetails = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://study-abroad-blogs-redux-server.vercel.app/blog/${id}`);
        const data = await res.json();
        if (data) {
            dispatch(getSingleBlog(data))
        }
    }
}

export default fetchBlogByIDForViewDetails;