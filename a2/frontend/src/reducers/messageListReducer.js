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
            newMessage["detail"] = false;
            newMessage["edit"] = false;
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
        case messageListConstants.MESSAGELIST_DETAIL_TOGGLE:
            let detailId = action.payload;
            state.messages.forEach(item => {if (item._id === detailId) {item.detail = !item.detail}});
            return {...state, messages: [...state.messages]};
        case messageListConstants.MESSAGELIST_EDIT_TOGGLE:
            let editId = action.payload;
            state.messages.forEach(item => {if (item._id === editId) {item.edit = !item.edit}});
            return {...state, messages: [...state.messages]};
        default:
            return state;
    }
}

