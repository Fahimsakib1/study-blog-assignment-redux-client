import { ADD_TO_HISTORY } from "../ActionTypes/ActionTypes";



//this function is called currying function in javascript
const HistoryCounter = (store) => (next) => (action) => {
    
    const state = store.getState();
    const history = state.blog.history; //history ia an array

    console.log("History ", history);
    console.log("Current State: ", store.getState());
    console.log("Action: ", action);

    if(action.type === ADD_TO_HISTORY){
        
        const newAction = {
            ...action,
            payload: {...action.payload, historyPosition: history.length}
        }
        
        return next(newAction);
    }
    return next(action);
}

export default HistoryCounter;