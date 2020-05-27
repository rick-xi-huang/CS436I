import {messageListConstants} from "../actions";

const initialState = {
    messages: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case messageListConstants.MESSAGELIST_ADD:
            return {...state, messages: [...state.messages, action.payload]};
        case messageListConstants.MESSAGELIST_DELETE:
            return {...state, messages: []};
        default:
            return state;
    }
}

