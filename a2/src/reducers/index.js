import { combineReducers } from 'redux';
import formReducer from "./formReducer";
import messageListReducer from './messageListReducer';

export default combineReducers({
	formStore: formReducer,
	messageListStore: messageListReducer
});