import { combineReducers } from 'redux';
import formReducer from "./formReducer";
import editFormReducer from "./editFormReducer";
import messageListReducer from './messageListReducer';

export default combineReducers({
	formStore: formReducer,
	editFormStore: editFormReducer,
	messageListStore: messageListReducer
});
