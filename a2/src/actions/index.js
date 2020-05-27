export const formConstants = {
	FORM_UPDATE_NAME: "FORM_UPDATE_NAME",
	FORM_UPDATE_MESSAGE: "FORM_UPDATE_MESSAGE",
	FORM_SUBMIT: "FORM_SUBMIT",
	FORM_CLEAR: "FORM_CLEAR",
};

export const messageListConstants = {
	MESSAGELIST_ADD: "MESSAGELIST_ADD",
	MESSAGELIST_DELETE: "MESSAGELIST_DELETE",
};


export const updateFormMessage = input => {
	return{
		type: formConstants.FORM_UPDATE_MESSAGE,
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

export const addNewMessage = (msg) => {
	return{
		type: messageListConstants.MESSAGELIST_ADD,
		payload: msg,
	}
};

export const deleteAllMessages = () => {
    return{
    	type: messageListConstants.MESSAGELIST_DELETE
	}
};

