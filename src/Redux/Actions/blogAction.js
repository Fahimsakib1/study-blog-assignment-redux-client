import { ADD_BLOG, ADD_TO_HISTORY, CLEAR_FILTERS, DELETE_BLOG, EDIT_BLOG, FIRST_UPLOAD_SORT, GET_SINGLE_BLOG, LAST_UPLOAD_SORT, LOAD_BLOG, SEARCH_BY_CATEGORY, UPDATE_BLOG } from "../ActionTypes/ActionTypes"



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

export const firstUpload = (number) => {
    return {
        type: FIRST_UPLOAD_SORT,
        payload: number
    }
}

export const lastUpload = (number) => {
    return {
        type: LAST_UPLOAD_SORT,
        payload: number
    }
}


export const clearFilters = (queryType) => {
    return {
        type: CLEAR_FILTERS,
        payload: queryType
    }
}

export const searchCategory = (data) => {
    return {
        type: SEARCH_BY_CATEGORY,
        payload: data
    }
}

export const addToHistory = (blog) => {
    return {
        type: ADD_TO_HISTORY,
        payload: blog
    }
}
