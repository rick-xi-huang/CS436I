import React from 'react';
import { connect } from 'react-redux';
import { updateMessageData, updateEditFormName, updateEditFormMessage, editFormSubmit, editClearForm} from '../actions/index.js';


class MessageEdit extends React.Component {

    render() {
        return (<div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <h1>New Message</h1>
                    <input id="newmessagefield" type="text" placeholder="Edit New Message"
                           value={this.props.message}
                           onChange={(e) => {
                               this.props.updateEditFormMessage(e);
                           }}
                    />
                    <input id="newnamefield" type="text" placeholder="Edit New Name"
                           value={this.props.name}
                           onChange={(e) => {
                               this.props.updateEditFormName(e);
                           }}
                    />
                    <button type="submit" id="add"
                            onClick={() => {
                                this.props.editFormSubmit();
                                this.props.updateMessageData(this.props.id, this.props.name, this.props.message)
                            }}
                    >Update
                    </button>
                    <button id="clear" onClick={() => this.props.editClearForm()}>Clear</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => { //name is by convention
    //state has entire state of app!!
    return { message: state.editFormStore.message, name: state.editFormStore.name,}; //now it will appear as props
};

export default connect(mapStateToProps, { updateMessageData, updateEditFormName, updateEditFormMessage, editFormSubmit, editClearForm })(MessageEdit);
