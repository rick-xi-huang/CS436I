import {messageListConstants} from "../actions";

const initialState = {
    messages: [{id: 1, name: "Tim", time: 2020/5/29, message: "Hello there", selected: false},
               {id: 2, name: "Tim", time: 2020/5/29 , message: "What's up", selected: false}]
};

let counter = 2;

export default function (state = initialState, action) {
    switch (action.type) {
        case messageListConstants.MESSAGELIST_ADD:
            let newMessages = action.payload;
            let date = new Date();
            newMessages["id"] = ++counter;
            newMessages["time"] = date.getTime();
            return {...state, messages: [...state.messages, newMessages]};
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

