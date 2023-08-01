import { ADD_BLOG, DELETE_BLOG, EDIT_BLOG, GET_SINGLE_BLOG, LOAD_BLOG, SINGLE_BLOG, UPDATE_BLOG } from "../ActionTypes/ActionTypes";


const initialState = {
    blogs: [],
    history: [],
};

const blogReducer = (state = initialState, action) => {

    switch (action.type) {

        //this function is used to load all the blogs on home page
        case LOAD_BLOG:
            return {
                ...state,
                blogs: action.payload
            }

        //this function is used to show the blog details on a new route
        case GET_SINGLE_BLOG:
            return {
                ...state,
                blogs: [action.payload]
            }

        //this function is used to add a new blog
        case ADD_BLOG:
            return {
                ...state,
                blogs: [...state.blogs, action.payload]
            }

        //this function is used to delete a blog
        case DELETE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter((blog) => blog._id !== action.payload)
            }

        //this function is used to get a blog for edit
        case EDIT_BLOG:
            return {
                ...state,
                blogs: action.payload,
                // blogs: state.blogs.find((blog) => blog._id === action.payload)
            }

        //this function is used to add a new blog
        case UPDATE_BLOG:
            return {
                ...state,
                blogs: action.payload,
            }

        default:
            return state
    }
}
export default blogReducer;