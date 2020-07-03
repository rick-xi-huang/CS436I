import React from 'react';
import { connect } from 'react-redux';
import { loadMessagesData, addNewMessageData, deleteOneMessageData, toggleMessage, deleteAllMessagesData} from '../actions/index.js';
import MessageCard from "./MessageCard";
import { FaSearch } from 'react-icons/all';
import {FaTrashAlt} from "react-icons/all";
import MessageEdit from "./MessageEdit";


class MessageList extends React.Component {
    componentDidMount() {
        this.props.loadMessagesData();
    }

    render() {
        return (<div className="content">
            <h1>List View </h1>
            <ul>
                {this.props.messages.map((item) =>
                    <div key={item._id}>
                    <li> {item.name} : {item.message}
                        <span onClick={()=>this.props.deleteOneMessageData(item._id)}>  <FaTrashAlt/> </span>
                        <span onClick={()=>this.props.toggleMessage(item._id)}> <FaSearch/> </span>
                    </li>
                        {item.selected &&
                        <MessageCard id={item._id} name={item.name} message={item.message} time={item.time}
                                     selected={item.selected} toggleSelected={this.props.toggleMessage}
                                     deleteSelected={this.props.deleteOneMessageData}/>
                        }
                    <MessageEdit id = {item._id} />
                    </div>
                    )}
            </ul>
            <button id="deleteall" onClick={() => this.props.deleteAllMessagesData()}>Delete All</button>
        </div>);
    }
}

const mapStateToProps = (state) => { //name is by convention
    //state has entire state of app!!
    return { messages: state.messageListStore.messages}; //now it will appear as props
};

export default connect(mapStateToProps, { loadMessagesData, addNewMessageData, deleteOneMessageData, toggleMessage, deleteAllMessagesData })(MessageList);
