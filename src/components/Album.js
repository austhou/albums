import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import * as actions from '../actions';

class Album extends Component {
    constructor() {
        super();
        this.state = {
            link: null,
            inputText: '',
            info: {},
        }
    }    
    requestListener() { 
        console.log(this.responseText);
    }
    handleChange(event) {
        this.props.updateAlbumText(this.props.id, event.target.value);
        //this.setState({inputText: event.target.value});
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
                    //this.setState({ info: contents, link: this.state.inputText });
                }
            })
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }
    returnButton() {
        if (this.props.albumInfo.inputText.length > 4) {
            return <div className="submitAlbum" onClick={this.requestURL.bind(this)}>Go</div>
        }
        else {
            return <div className="submitDisable" >Enter URL</div>
        }
    }
    returnCard() {
        if (this.props.albumInfo.info.title) {
            return <div style={{position: 'absolute'}}><img onClick={this.openInNewTab.bind(this, this.props.albumInfo.inputText)} className="coverImg" src={this.props.albumInfo.info.thumbnail_url} /></div>
        }
        else {
            return (
                
                <div className="albumForm" style={{padding: 16, height: 'calc(100% - 32px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <input 
                        className="inputBox" 
                        style={{width: 'calc(100% - 18px)'}}
                        type="text" 
                        value={this.props.albumInfo.inputText} 
                        onChange={this.handleChange.bind(this)} 
                        placeholder="Spotify URL"
                    />
                    <div style={{height: 16}} />
                    {this.returnButton()}
                </div>
                
            )
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
            <div className="albumHolder" style={{width: 200, height: 200, margin: 16, backgroundColor: '#efefef'}}>
                {this.returnCard()}
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    const albumInfo = {...state.albums[ownProps.id]};
    return { albumInfo };
}

export default connect(mapStateToProps, actions)(Album);