import {messageListConstants} from "../actions";

const initialState = {
    messages: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case messageListConstants.MESSAGELIST_LOAD:
            return {...state, messages: action.payload};
        case messageListConstants.MESSAGELIST_ADD:
            let newMessage = action.payload;
            newMessage["selected"] = false;
            return {...state, messages: [...state.messages, newMessage]};
        case messageListConstants.MESSAGELIST_UPDATE:
            let updatedMessage = action.payload.message;
            let source = action.payload.id;
            return {...state, messages: state.messages.map(obj => {if(obj._id === source) return updatedMessage; else return obj})};
        case messageListConstants.MESSAGELIST_DELETE_ALL:
            return {...state, messages: []};
        case messageListConstants.MESSAGELIST_DELETE_ONE:
            let target = action.payload;
            return {...state, messages: state.messages.filter(item => item._id !== target)};
        case messageListConstants.MESSAGELIST_TOGGLE:
            let selected = action.payload;
            state.messages.forEach(item => {if (item._id === selected) {item.selected = !item.selected}});
            return {...state, messages: [...state.messages]};
        default:
            return state;
    }
}

