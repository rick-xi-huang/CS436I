import React from 'react'
import { connect } from 'react-redux';
import { css } from "@emotion/core";
import FadeLoader from "react-spinners/FadeLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Spinner extends React.Component {
    render() {
        return (
            <div className='spinner'>
                <FadeLoader
                    css={override}
                    color={"#123abc"}
                    loading={this.props.spinner}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => { //name is by convention
    //state has entire state of app!!
    return { spinner: state.spinnerStore}; //now it will appear as props
};

export default connect(mapStateToProps, {})(Spinner);
