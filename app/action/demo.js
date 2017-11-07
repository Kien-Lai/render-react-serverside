export const DEMO = "DEMO";

export const applyReduxThunk = function() {
    return function(dispatch, getState) {
        console.log(getState());
        dispatch({type:'REDUX_THUNK'});
    }
} 