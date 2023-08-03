import { clearFilters} from "../Actions/blogAction";

const clearAllFiltersData = (queryType) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://study-abroad-blogs-redux-server.vercel.app/clearFilters/${queryType}`);
        const data = await res.json();
        if (data.length) {
            dispatch(clearFilters(data))
        }
    }
}

export default clearAllFiltersData;