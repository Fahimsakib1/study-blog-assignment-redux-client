import { GET_SINGLE_BLOG, LOAD_BLOG } from "../ActionTypes/ActionTypes"

export const loadBlogs = (data) => {
    return {
        type: LOAD_BLOG,
        payload: data
    }
}

export const getSingleBlog = (id) => {
    return {
        type: GET_SINGLE_BLOG,
        payload: id
    }
}