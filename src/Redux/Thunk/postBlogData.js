import { toast } from "react-hot-toast";
import { addBlog} from "../Actions/blogAction";

const postBlogData = (blog) => {
    return async (dispatch, getState) => {
        const res = await fetch('https://study-abroad-blogs-redux-server.vercel.app/addBlog', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();
        if (data.acknowledged) {
            dispatch(addBlog(blog));
            toast.success("Blog Added Successfully")
        }
    }
}

export default postBlogData;