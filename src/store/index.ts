import { TracksState } from './ducks/tracks/types';
import { AlbumsState } from './ducks/albums/types';
import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ArtistsState } from './ducks/artists/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  artists: ArtistsState;
  albums: AlbumsState;
  tracks: TracksState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;