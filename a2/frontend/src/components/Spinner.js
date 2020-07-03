import React from 'react'
import { connect } from 'react-redux';
import { FaSpinner } from 'react-icons/all'

class Spinner extends React.Component {
    render() {
        return (
            <div className='spinner'>
                {this.props.spinner &&
                <FaSpinner color='#3B5998' className='fa-spin'/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => { //name is by convention
    //state has entire state of app!!
    return { spinner: state.spinnerStore}; //now it will appear as props
};

export default connect(mapStateToProps, {})(Spinner);
