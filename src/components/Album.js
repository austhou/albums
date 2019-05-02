import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';

import '../App.css';
import * as actions from '../actions';

class Album extends Component {
    constructor() {
        super();
        this.state = {
            link: null,
            inputText: '',
            info: {},
            dirty: false,
        }
    }    
    requestListener() { 
        console.log(this.responseText);
    }
    handleChange(event) {
        this.props.updateAlbumText(this.props.id, event.target.value);
        //this.setState({inputText: event.target.value});
        this.setState({ dirty: true });
    }
    keyPress(e){
        if(e.keyCode === 13){
            console.log(e.target.value)
            this.requestURL();
        }
    }
    requestURL() {
        var url = `https://embed.spotify.com/oembed/?url=${this.props.albumInfo.inputText}`;
        
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
            fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
            .then(response => response.json())
            .then(contents => {
                console.log(contents)
                if (contents.status === 400) {
                    this.props.updateAlbumText(this.props.id, 'Check URL');
                }
                else {
                    this.props.updateAlbumInfo(this.props.id, contents);
                    this.setState({ dirty: false });
                    //this.setState({ info: contents, link: this.state.inputText });
                }
            })
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }
    returnButton() {
        if (this.props.albumInfo.inputText.length > 4 && this.state.dirty) {
            return (
                
                <div className="submitAlbum" onClick={this.requestURL.bind(this)}>
                    <Icon name='long arrow alternate right' color='white' style={{margin: 8, marginTop: 6, marginBottom: 10}}/>
                </div>
            )
        }
        else {
            return <div />
        }
    }
    returnForm() {
        return (
            <div className="albumForm" >
                <input 
                    className="inputBox" 
                    style={{width: 'calc(100% - 18px)'}}
                    type="text" 
                    value={this.props.albumInfo.inputText} 
                    onKeyDown={this.keyPress.bind(this)}
                    onChange={this.handleChange.bind(this)} 
                    placeholder="Spotify URL"
                />
                <div style={{height: 16}} />
                {this.returnButton()}
            </div>
        )
    }
    returnCard() {
        if (this.props.albumInfo.info.title) {
            return (
                <div className="albumHolderBox">
                    <img onClick={this.openInNewTab.bind(this, this.props.albumInfo.inputText)} className="coverImg" src={this.props.albumInfo.info.thumbnail_url} />
                </div>
            )
        }
        else {
            //return (this.returnForm())
        }
    }
    openInNewTab(href) {
        Object.assign(document.createElement('a'), {
          target: '_blank',
          href,
        }).click();
    }
    render() {
        return (
            <div className="albumHolder" >
                {this.returnCard()}
                <div className="albumHolderOverlay" style={{position: 'absolute'}}/>
                {this.returnForm()}
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    const albumInfo = {...state.albums[ownProps.id]};
    return { albumInfo };
}

export default connect(mapStateToProps, actions)(Album);