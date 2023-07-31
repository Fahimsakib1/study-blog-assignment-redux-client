import { getSingleBlog} from "../Actions/blogAction";

const fetchBlogByIDForViewDetails = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/blog/${id}`);
        const data = await res.json();
        if (data) {
            dispatch(getSingleBlog(data))
        }
    }
}

export default fetchBlogByIDForViewDetails;