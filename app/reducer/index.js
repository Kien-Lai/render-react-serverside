import {combineReducers} from 'redux';
import demo from './demo';
import action from './action';

const reducer = combineReducers({
    demo,
    action
});

export default reducer;