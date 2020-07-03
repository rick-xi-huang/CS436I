import {editFormConstants} from '../actions/index'

const initialState = {
    name: "",
    message: "",
};

export default function editFormReducer(state = initialState, action){
    switch (action.type){
        case editFormConstants.EDIT_FORM_UPDATE_NAME:
            return {...state, name: action.payload};
        case editFormConstants.EDIT_FORM_UPDATE_MESSAGE:
            return {...state, message: action.payload};
        case editFormConstants.EDIT_FORM_SUBMIT:
            return initialState;
        case editFormConstants.EDIT_FORM_CLEAR:
            return initialState;
        default:
            return state;
    }

}

