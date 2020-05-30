export const formConstants = {
	FORM_UPDATE_NAME: "FORM_UPDATE_NAME",
	FORM_UPDATE_MESSAGE: "FORM_UPDATE_MESSAGE",
	FORM_SUBMIT: "FORM_SUBMIT",
	FORM_CLEAR: "FORM_CLEAR",
};

export const messageListConstants = {
	MESSAGELIST_ADD: "MESSAGELIST_ADD",
	MESSAGELIST_DELETE_ALL: "MESSAGELIST_DELETE",
	MESSAGELIST_DELETE_ONE: "MESSAGELIST_DELETE_ONE",
	MESSAGELIST_TOGGLE: "MESSAGELIST_TOGGLE",
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

export const addNewMessage = (name, msg) => {
	return{
		type: messageListConstants.MESSAGELIST_ADD,
		payload: {name: name, message: msg},
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

