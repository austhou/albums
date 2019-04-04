import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';

import './App.css';
import Album from './components/Album';
import Meta from './components/Meta';
import Controls from './components/Controls';

var link = "https://open.spotify.com/album/0tWckYjFI6ioZptLr42J3p?si=AyrHxZ0XQ8-Blyc-IVza9g";


class App extends Component {
    constructor() {
        super();
        this.state = {
            albumX: [1,2,3],
            albumY: [1,2,3],
        }
    }
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyAgL63v2FYpSA22YGjKbgju3xuGpeZ05aY",
            authDomain: "albums-ba497.firebaseapp.com",
            databaseURL: "https://albums-ba497.firebaseio.com",
            projectId: "albums-ba497",
            storageBucket: "albums-ba497.appspot.com",
            messagingSenderId: "746661427419"
        };
        firebase.initializeApp(config);
        firebase.firestore();
    }
    returnRow(row) {
        return (
            <div style={{display: 'flex', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto', width: 696}} >
                {this.state.albumX.map(n => {
                    var id = (row-1)*3 + n-1;
                    return <Album key={id} id={id}/>
                    
                })}
            </div>
        )
    }
    returnGrid() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', marginLeft: 'auto', marginRight: 'auto'}} >
                {this.state.albumY.map(n => {
                    return <div key={'row'+n}>{this.returnRow(n)}</div>
                })}
            </div>
        )
    }
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <div className="App" style={{padding: 32, position: 'relative'}}>
                    <div style={{position: 'absolute'}}>
                        <Meta />
                        {this.returnGrid()}
                    </div>
                        <div style={{position: 'absolute', right: 0, width: '128px', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', zIndex: 0}}>
                        <Controls />
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
