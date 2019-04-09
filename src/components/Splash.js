import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import '../App.css';
import * as actions from '../actions';

class Splash extends Component {
    constructor() {
        super()
        this.state = {
            redirect: false,
        }
    }
    handleOnClick = () => {
        // some action...
        // then redirect
        this.setState({redirect: true});
      }
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/create" />;
        }
        return (
            <div style={{width: '100%', marginTop: '35vh', zIndex: 6, position: 'absolute'}}>
                <p className="textSplash">Albumlist</p>
                <p className="textName" style={{marginTop: 4}}>List Ur Albums</p>
                <div onClick={this.handleOnClick} style={{width: '180px', margin: 'auto', marginTop: 32, zIndex: 6}} className="shareButton"><p>Make a List</p></div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const { title, name } = state.metadata;
    return { title, name };
}

export default connect(mapStateToProps, actions)(Splash);