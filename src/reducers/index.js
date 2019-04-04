import { combineReducers } from 'redux';

import JsonReducer from './JsonReducer';
import AlbumsReducer from './AlbumsReducer';
import MetaReducer from './MetaReducer';

export default combineReducers({
    //auth: AuthReducer,
    json: JsonReducer,
    albums: AlbumsReducer,
    metadata: MetaReducer,
});
