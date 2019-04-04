import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import * as actions from '../actions';

class Controls extends Component {
    generate() {
        //this.props.generateShare(this.props.title, this.props.name, this.props.albums);
        this.props.saveAlbums(this.props.title, this.props.name, this.props.albums);
    }
    returnShare() {
        var total = 0;
        this.props.albums.forEach(album => {
            if (album.info.title) {
                total = total + 1;
            }
        })
        
        if (total === 9) {
            if (this.props.link) {
                return <div className="shareButton">{this.props.link}</div>
            }
            else {
                return <div onClick={this.generate.bind(this)} className="shareButton">Generate Link</div>
            }
        }
        else {
            return <div />
        }
    }

    render() {
        return (
                <div style={{zIndex: 1}}>{this.returnShare()}</div>
        );
    }
}


const mapStateToProps = (state) => {
    const { title, name } = state.metadata;
    const albums = state.albums;
    const json = state.json;
    const link = state.link;
    return { title, name, albums, json, link };
}

export default connect(mapStateToProps, actions)(Controls);