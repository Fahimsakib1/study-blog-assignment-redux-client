import { searchCategory} from "../Actions/blogAction";

const fetchBlogsByCategory= (category) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://study-abroad-blogs-redux-server.vercel.app/blogs/${category}`);
        const data = await res.json();
        if (data) {
            dispatch(searchCategory(data))
        }
    }
}

export default fetchBlogsByCategory;