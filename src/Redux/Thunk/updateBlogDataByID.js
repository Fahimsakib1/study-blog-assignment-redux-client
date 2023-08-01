import { toast } from "react-hot-toast";
import { updateBlog } from "../Actions/blogAction";



export const updateBlogDataByID = (id, blog) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/updateBlog/${id}`, {
            method: 'PUT',
            body: JSON.stringify(blog),
            headers: { 'Content-Type': 'application/json'}
        });
        const data = await res.json();
        if(data){
            dispatch(updateBlog(blog));
            toast.success("Blog Updated Successfully")
        }
    }
}

export default updateBlogDataByID;