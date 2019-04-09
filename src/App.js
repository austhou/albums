import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
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
        document.title = 'Albumlist'
    }


    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <div className="App">
                    <Helmet>
                        <meta name="title" content="Albumlist " />
                        <meta name="description" content="Display what you've been listening to. " />

                        
                        <meta property="og:type" content="website" />
                        <meta property="og:url" content="http://albumlist.co/" />
                        <meta property="og:title" content="Albumlist " />
                        <meta property="og:description" content="Showcase what you've been listening to. " />
                        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

                        
                        <meta property="twitter:card" content="summary_large_image" />
                        <meta property="twitter:url" content="http://albumlist.co/" />
                        <meta property="twitter:title" content="Albumlist " />
                        <meta property="twitter:description" content="Showcase what you've been listening to. " />
                        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
                    </Helmet>
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
                        <Route
                                exact path="/create"
                                component={Controls}
                        />
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App;
