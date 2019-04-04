import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';

import './App.css';
import Controls from './components/Controls';
import Create from './components/Create';
import Display from './components/Display';

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

        
    }
    createStoreWithFirebase = compose(
        reduxFirestore(firebase), // firebase instance as first argument, rfConfig as optional second
      )(createStore)


    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <div className="App">
                    <Router>
                        <Route
                            path="/list/:listid"
                            render={(props) => <Display {...props.match.params} /> }
                            //component={Display}
                        />
                        <Route
                            exact path="/"
                            component={Create}
                        />
                    </Router>
                    <div className='controlsOverlay'>
                        <Controls />
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
