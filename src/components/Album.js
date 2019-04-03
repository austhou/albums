import React, { Component } from 'react';
import '../App.css';

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
        this.setState({inputText: event.target.value});
    }
    requestURL() {
        var url = `https://embed.spotify.com/oembed/?url=${this.state.inputText}`;
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
            fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
            .then(response => response.json())
            .then(contents => {
                console.log(contents)
                this.setState({ info: contents, link: this.state.inputText });
            })
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }
    returnCard() {
        if (this.state.link) {
            return <img src={this.state.info.thumbnail_url} style={{width: 200, height: 200}}/>
        }
        else {
            return (
                <div>
                    <input type="text" value={this.state.inputText} onChange={this.handleChange.bind(this)} />
                    <div onClick={this.requestURL.bind(this)} style= {{backgroundColor: 'red', width:100, height:20}} />
                </div>
            )
        }
    }

    render() {
        return (
            <div style={{width: 200, height: 200, backgroundColor: 'black'}}>
                {this.returnCard()}
            </div>
        );
    }
}

export default Album;
