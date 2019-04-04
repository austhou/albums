import { combineReducers } from 'redux';

import JsonReducer from './JsonReducer';
import AlbumsReducer from './AlbumsReducer';
import MetaReducer from './MetaReducer';
import DisplayReducer from './DisplayReducer';
import LinkReducer from './LinkReducer';

export default combineReducers({
    //auth: AuthReducer,
    json: JsonReducer,
    albums: AlbumsReducer,
    metadata: MetaReducer,
    displayData: DisplayReducer,
    link: LinkReducer,
});
