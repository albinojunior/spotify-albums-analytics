import { combineReducers } from 'redux';

import artists from './artists';
import albums from './albums';
import tracks from './tracks';

export default combineReducers({
    artists,
    albums,
    tracks
});