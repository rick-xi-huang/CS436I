export const formConstants = {
	FORM_UPDATE_NAME: "FORM_UPDATE_NAME",
	FORM_UPDATE_MESSAGE: "FORM_UPDATE_MESSAGE",
	FORM_SUBMIT: "FORM_SUBMIT",
	FORM_CLEAR: "FORM_CLEAR",
};

export const editFormConstants = {
	EDIT_FORM_UPDATE_NAME: "EDIT_FORM_UPDATE_NAME",
	EDIT_FORM_UPDATE_MESSAGE: "EDIT_FORM_UPDATE_MESSAGE",
	EDIT_FORM_SUBMIT: "EDIT_FORM_SUBMIT",
	EDIT_FORM_CLEAR: "EDIT_FORM_CLEAR",
};

export const messageListConstants = {
	MESSAGELIST_LOAD: "MESSAGELIST_LOAD",
	MESSAGELIST_ADD: "MESSAGELIST_ADD",
	MESSAGELIST_UPDATE: "MESSAGELIST_UPDATE",
	MESSAGELIST_DELETE_ALL: "MESSAGELIST_DELETE",
	MESSAGELIST_DELETE_ONE: "MESSAGELIST_DELETE_ONE",
	MESSAGELIST_TOGGLE: "MESSAGELIST_TOGGLE",
};

export const loadMessagesData = () => {
	return async dispatch => {
		fetch("http://localhost:9000/messages", {
			method: 'GET',
			headers: {'Content-Type': 'application/json'},
		})
			.then((res) => res.json())
			.then((res) => {
				dispatch(loadMessages(res));
			})
	}
};

export const addNewMessageData = (name, message) => {
	return async dispatch => {
		fetch("http://localhost:9000/messages/add", {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({ name: name, message: message }),
		})
			.then((res) => res.json())
			.then((res) => {
				dispatch(addNewMessage(res));
			})
	}
};

export const updateMessageData = (id, name, message) => {
	return async dispatch => {
		fetch(`http://localhost:9000/messages/update/${id}`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({ name: name, message: message }),
		})
			.then((res) => res.json())
			.then((res) => {
				dispatch(updateMessage(id, res));
			})
	}
};

export const deleteOneMessageData = (id) => {
	return async dispatch => {
		fetch(`http://localhost:9000/messages/delete/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((res) => {
				dispatch(deleteOneMessage(id));
			})
	}
};

export const deleteAllMessagesData = () => {
	return async dispatch => {
		fetch("http://localhost:9000/messages/deleteall", {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((res) => {
				dispatch(deleteAllMessages());
			})
	}
};

export const updateFormMessage = input => {
	return{
		type: formConstants.FORM_UPDATE_MESSAGE,
		payload: input.target.value
	}
};

export const updateFormName = input => {
	return{
		type: formConstants.FORM_UPDATE_NAME,
		payload: input.target.value
	}
};

export const formSubmit = () => {
	return{
		type: formConstants.FORM_SUBMIT,
	}
};

export const clearForm = () => {
	return{
		type: formConstants.FORM_CLEAR,
	}
};

export const updateEditFormMessage = input => {
	return{
		type: editFormConstants.EDIT_FORM_UPDATE_MESSAGE,
		payload: input.target.value
	}
};

export const updateEditFormName = input => {
	return{
		type: editFormConstants.EDIT_FORM_UPDATE_NAME,
		payload: input.target.value
	}
};

export const editFormSubmit = () => {
	return{
		type: editFormConstants.EDIT_FORM_SUBMIT
	}
};

export const editClearForm = () => {
	return{
		type: editFormConstants.EDIT_FORM_CLEAR
	}
};

export const loadMessages = (msgs) => {
	return{
	    type: messageListConstants.MESSAGELIST_LOAD,
		payload: msgs,
	}
};

export const addNewMessage = (msg) => {
	return{
		type: messageListConstants.MESSAGELIST_ADD,
		payload: msg,
	}
};

export const updateMessage = (id, message) => {
	return{
		type: messageListConstants.MESSAGELIST_UPDATE,
		payload: {id: id, message: message}
	}
};

export const deleteAllMessages = () => {
    return{
    	type: messageListConstants.MESSAGELIST_DELETE_ALL
	}
};

export const deleteOneMessage = (id) => {
	return{
		type: messageListConstants.MESSAGELIST_DELETE_ONE,
		payload: id
	}
};

export const toggleMessage = (id) => {
	return{
		type: messageListConstants.MESSAGELIST_TOGGLE,
		payload: id
	}
};

