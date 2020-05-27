import React from 'react';
import { connect } from 'react-redux';
import { updateFormMessage, formSubmit, addNewMessage, clearForm } from '../actions/index.js';


class Form extends React.Component {
    render() {
        return (<div>
            <form onSubmit={(e) => {e.preventDefault();}}>
                <h1>Messages </h1>
                <input id="messagefield" type="text" placeholder="Add New Message"
                       value={this.props.message}
                       onChange={(e) => {this.props.updateFormMessage(e);}}
                />
                    <button type="submit" id="add"
                            onClick={() => {this.props.formSubmit();
                                            this.props.addNewMessage(this.props.message)}}
                    >Add</button>
                    <button id="clear" onClick={() => this.props.clearForm()}>Clear</button>
            </form>
        </div>);
    }
}

const mapStateToProps = (state) => { //name is by convention
    //state has entire state of app!!
    return { message: state.formStore.message}; //now it will appear as props
};

export default connect(mapStateToProps, { updateFormMessage, formSubmit, addNewMessage, clearForm })(Form);