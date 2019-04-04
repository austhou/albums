import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import * as actions from '../actions';

class Meta extends Component {
    handleChangeTitle(event) {
        this.props.updateTitle(event.target.value);
    }
    handleChangeName(event) {
        this.props.updateName(event.target.value);
    }
    render() {
        return (
            <div style={{width: '100%'}}>
                <input 
                    type="text" 
                    className="inputTitle" 
                    placeholder="Title"
                    value={this.props.title}
                    onChange={this.handleChangeTitle.bind(this)}
                />
                <div style={{width: '50%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 32}}>
                    <input type="text" className="inputName" placeholder="Your name" value={this.props.name} onChange={this.handleChangeName.bind(this)}/>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const { title, name } = state.metadata;
    return { title, name };
}

export default connect(mapStateToProps, actions)(Meta);