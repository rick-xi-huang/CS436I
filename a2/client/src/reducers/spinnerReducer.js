import {spinnerConstants} from '../actions/index'

const initialState = false;

export default function spinnerReducer(state = initialState, action){
    switch (action.type){
        case spinnerConstants.SPINNER_ON:
            return true;
        case spinnerConstants.SPINNER_OFF:
            return false;
        default:
            return state;
    }

}

