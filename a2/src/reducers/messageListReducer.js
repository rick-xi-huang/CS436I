import {messageListConstants} from "../actions";

const initialState = {
    messages: [{id: 1, name: "Tim", time: 1591916288500, message: "Hello there", selected: false},
               {id: 2, name: "Tim", time: 1591916388500 , message: "What's up", selected: false}]
};

let counter = 2;

export default function (state = initialState, action) {
    switch (action.type) {
        case messageListConstants.MESSAGELIST_ADD:
            let newMessage = action.payload;
            let date = new Date();
            newMessage["id"] = ++counter;
            newMessage["time"] = date.getTime();
            newMessage["selected"] = false;
            return {...state, messages: [...state.messages, newMessage]};
        case messageListConstants.MESSAGELIST_DELETE_ALL:
            return {...state, messages: []};
        case messageListConstants.MESSAGELIST_DELETE_ONE:
            let target = action.payload;
            return {...state, messages: state.messages.filter(item => item.id !== target)};
        case messageListConstants.MESSAGELIST_TOGGLE:
            let selected = action.payload;
            state.messages.forEach(item => {if (item.id === selected) {item.selected = !item.selected}});
            return state;
        default:
            return state;
    }
}

