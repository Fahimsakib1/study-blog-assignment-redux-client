import { lastUpload } from "../Actions/blogAction";

const sortBlogsByLastUpload = (number) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/blogSortByLastUpload/${number}`);
        const data = await res.json();
        console.log("Sorting Data Outside: ", data);
        if (data.length) {
            dispatch(lastUpload(data))
            console.log("Sorting Data Inside: ", data);
        }
    }
}

export default sortBlogsByLastUpload;