import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import ReactGA from 'react-ga';
import reducers from './reducers';

import './App.css';
import Controls from './components/Controls';
import Create from './components/Create';
import Display from './components/Display';
import Splash from './components/Splash';

var link = "https://open.spotify.com/album/0tWckYjFI6ioZptLr42J3p?si=AyrHxZ0XQ8-Blyc-IVza9g";


class App extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    componentWillMount() {
        if (!this.state.reactGaInitialized) {
            ReactGA.initialize('UA-137107594-2');
            this.setState({reactGaInitialized: true})
        }
        ReactGA.pageview(window.location.pathname + window.location.search);
        
    }


    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <div className="App">
                    <Router>

                        <Route
                            exact path="/create"
                            component={Create}
                            //component={Display}
                        />
                        <Route
                            path="/list/:listid"
                            render={(props) => <Display {...props.match.params} /> }
                            //component={Display}
                        />
                        <Route
                            exact path="/"
                            component={Splash}
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
