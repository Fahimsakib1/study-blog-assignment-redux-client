import { loadBlogs } from "../Actions/blogAction";

const fetchBlogData = () => {
    return async (dispatch, getState) => {
        const res = await fetch('https://study-abroad-blogs-redux-server.vercel.app/blogs');
        const data = await res.json();
        if (data.length) {
            dispatch(loadBlogs(data))
        }
    }
}

export default fetchBlogData;