import { ADD_BLOG, DELETE_BLOG, EDIT_BLOG, GET_SINGLE_BLOG, LOAD_BLOG, UPDATE_BLOG } from "../ActionTypes/ActionTypes"

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

export const addBlog = (blog) => {
    return {
        type: ADD_BLOG,
        payload: blog
    }
}

export const deleteBlogData = (id) => {
    return {
        type: DELETE_BLOG,
        payload: id
    }
}

export const editBlog = (id) => {
    return {
        type: EDIT_BLOG,
        payload: id
    }
}

export const updateBlog = (blog) => {
    return {
        type: UPDATE_BLOG,
        payload: blog
    }
}
