import { ADD_BLOG, GET_SINGLE_BLOG, LOAD_BLOG } from "../ActionTypes/ActionTypes";


const initialState = {
    blogs: [],
    history: [],
};

const blogReducer = (state = initialState, action) => {

    switch (action.type) {

        case LOAD_BLOG:
            return {
                ...state,
                blogs: action.payload
            }

        case GET_SINGLE_BLOG:
            return {
                ...state,
                blogs: [action.payload]
            }


        default:
            return state
    }
}
export default blogReducer;