import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import * as actions from '../actions';
import Album from './Album';
import Meta from './Meta';

class Create extends Component {
    constructor() {
        super();
        this.state = {
            albumX: [1,2,3],
            albumY: [1,2,3],
        }
    }
    returnRow(row) {
        return (
            <div className='albumGridRow' >
                {this.state.albumX.map(n => {
                    var id = (row-1)*3 + n-1;
                    return <Album key={id} id={id}/>
                    
                })}
            </div>
        )
    }
    returnGrid() {
        return (
            <div className='albumGrid' >
                {this.state.albumY.map(n => {
                    return <div key={'row'+n}>{this.returnRow(n)}</div>
                })}
            </div>
        )
    }

    render() {
        return (
            <div className='displayHolder'>
                <Meta />
                {this.returnGrid()}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const { title, name } = state.metadata;
    const albums = state.albums;
    const json = state.json;
    return { title, name, albums, json };
}

export default connect(mapStateToProps, actions)(Create);