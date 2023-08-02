import { clearFilters} from "../Actions/blogAction";

const clearAllFiltersData = (queryType) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/clearFilters/${queryType}`);
        const data = await res.json();
        if (data.length) {
            dispatch(clearFilters(data))
        }
    }
}

export default clearAllFiltersData;