import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Album from './components/Album';

var link = "https://open.spotify.com/album/0tWckYjFI6ioZptLr42J3p?si=AyrHxZ0XQ8-Blyc-IVza9g";


class App extends Component {
    constructor() {
        super();
        this.state = {
            albumX: [1,2,3],
            albumY: [1,2,3],
        }
    }
    returnRow() {
        return (
            <div style={{display: 'flex', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto', width: 696}} >
                {this.state.albumX.map(n => {
                    console.log("asdf")
                    return <Album key={Math.random()}/>
                    
                })}
            </div>
        )
    }
    returnGrid() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', marginLeft: 'auto', marginRight: 'auto'}} >
                {this.state.albumY.map(n => {
                    return <div>{this.returnRow()}</div>
                })}
            </div>
        )
    }
    render() {
        return (
            <div className="App" style={{padding: 32}}>
                <input type="text" className="inputTitle" placeholder="Title"/>
                <div style={{width: '50%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 32}}>
                    <input type="text" className="inputName" placeholder="Your name"/>
                </div>
                {this.returnGrid()}
            </div>
        );
    }
}

export default App;
