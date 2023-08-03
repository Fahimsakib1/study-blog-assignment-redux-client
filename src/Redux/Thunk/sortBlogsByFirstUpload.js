import { firstUpload } from "../Actions/blogAction";

const sortBlogsByFirstUpload = (number) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://study-abroad-blogs-redux-server.vercel.app/blogSortByFirstUpload/${number}`);
        const data = await res.json();
        console.log("Sorting Data Outside: ", data);
        if (data.length) {
            dispatch(firstUpload(data))
            console.log("Sorting Data Inside: ", data);
        }
    }
}

export default sortBlogsByFirstUpload;