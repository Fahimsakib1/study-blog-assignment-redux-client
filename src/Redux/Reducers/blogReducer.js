import { ADD_BLOG, ADD_TO_HISTORY, CLEAR_FILTERS, DELETE_BLOG, EDIT_BLOG, FIRST_UPLOAD_SORT, GET_SINGLE_BLOG, LAST_UPLOAD_SORT, LOAD_BLOG, SEARCH_BY_CATEGORY, UPDATE_BLOG } from "../ActionTypes/ActionTypes";


const initialState = {
    blogs: [],
    history: [],
};

const blogReducer = (state = initialState, action) => {

    const selectedBlog = state.history.find(
        (blog) => blog._id === action.payload._id
    );


    switch (action.type) {

        //this function is used to load all the blogs on home page
        case LOAD_BLOG:
            return {
                ...state,
                blogs: action.payload,
                number: 0
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

        //this function is used to sort the blogs by first upload on home page
        case FIRST_UPLOAD_SORT:
            return {
                ...state,
                blogs: action.payload,
                number: 1
            }

        //this function is used to sort the blogs by last upload on home page
        case LAST_UPLOAD_SORT:
            return {
                ...state,
                blogs: action.payload,
                number: -1
            }

        //this function is used to clear all filters on home page
        case CLEAR_FILTERS:
            return {
                ...state,
                blogs: action.payload,
                number: 0
            }

        //this function is used to search blogs by category
        case SEARCH_BY_CATEGORY:
            return {
                ...state,
                blogs: action.payload,
                done: 1
            }

        //this function is used to add to the blogs to History Page
        case ADD_TO_HISTORY:
            if (selectedBlog) {
                const newHistory = state.history.filter(
                    (blog) => blog._id !== selectedBlog._id
                );

                selectedBlog.read = selectedBlog.read + 1;

                return {
                    ...state,
                    history: [...newHistory, selectedBlog],
                };
            }
            return {
                ...state,
                history: [...state.history, { ...action.payload, read: 1 }],
            };

        default:
            return state
    }
}
export default blogReducer;