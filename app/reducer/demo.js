import {DEMO} from '../action/demo';

const initState = {
    test: true
}

var demo = function(state = initState, action) {
    switch(action.type) {
        case DEMO : 
            return {...state, test: !state.test }
        default: 
            return state;
    }
}

export default demo;