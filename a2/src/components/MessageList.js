import React from 'react';
import { connect } from 'react-redux';
import { addNewMessage, deleteOneMessage, toggleMessage, deleteAllMessages} from '../actions/index.js';
import MessageCard from "./MessageCard";
import { FaSearch } from 'react-icons/all';
import {FaTrashAlt} from "react-icons/all";


class MessageList extends React.Component {
    render() {
        return (<div className="content">
            <h1>List View </h1>
            <ul>
                {this.props.messages.map((item) =>
                    <div>
                    <li> {item.name} : {item.message}
                        <span onClick={()=>this.props.deleteOneMessage(item.id)}>  <FaTrashAlt/> </span>
                        <span onClick={()=>{this.props.toggleMessage(item.id); this.forceUpdate()}}> <FaSearch/> </span>
                    </li>
                        {item.selected &&
                        <MessageCard id={item.id} name={item.name} message={item.message} time={item.time}
                                     selected={item.selected} toggleSelected={this.props.toggleMessage}
                                     deleteSelected={this.props.deleteOneMessage}/>
                        }</div>
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

export default connect(mapStateToProps, { addNewMessage, deleteOneMessage, toggleMessage, deleteAllMessages })(MessageList);