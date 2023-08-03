import { lastUpload } from "../Actions/blogAction";

const sortBlogsByLastUpload = (number) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://study-abroad-blogs-redux-server.vercel.app/blogSortByLastUpload/${number}`);
        const data = await res.json();
        console.log("Sorting Data Outside: ", data);
        if (data.length) {
            dispatch(lastUpload(data))
            console.log("Sorting Data Inside: ", data);
        }
    }
}

export default sortBlogsByLastUpload;