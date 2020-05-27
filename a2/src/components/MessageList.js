import React from 'react';
import { connect } from 'react-redux';
import { addNewMessage, deleteAllMessages} from '../actions/index.js';


class MessageList extends React.Component {
    render() {
        return (<div>
            <ul id="messages">
                {this.props.messages.map((item) =>
                    <li> {item} </li>
                )}
            </ul>
            <button id="deleteall" onClick={() => this.props.deleteAllMessages()}>Delete All</button>
        </div>);
    }
}

const mapStateToProps = (state) => { //name is by convention
    //state has entire state of app!!
    return { messages: state.messageListStore.messages}; //now it will appear as props
};

export default connect(mapStateToProps, { addNewMessage, deleteAllMessages })(MessageList);