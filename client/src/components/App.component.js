import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
// import SongList from './songs/SongList.component';
// import SongCreate from './songs/SongCreate.component';
// import SongEdit from './songs/SongEdit.component';
// import SongDelete from './songs/SongDelete.component';
// import SongShow from './songs/SongShow.component';
// import Header from './Header.component';
// import NotFound from './NotFound.component';

import Loading from './Loader.component';
import history from '../history';

const SongList = React.lazy(() => import('./songs/SongList.component'));
const SongCreate = React.lazy(() => import('./songs/SongCreate.component'));
const SongEdit = React.lazy(() => import('./songs/SongEdit.component'));
const SongDelete = React.lazy(() => import('./songs/SongDelete.component'));
const SongShow = React.lazy(() => import('./songs/SongShow.component'));
const Header = React.lazy(() => import('./Header.component'));
const NotFound = React.lazy(() => import('./NotFound.component'));

const App = () => {
    return (
        <div className="ui container">
            <Suspense fallback={<Loading />}>
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <SongList path="/" exact />
                            <SongCreate path="/songs/new" exact />
                            <SongEdit path="/songs/edit/:id" exact />
                            <SongDelete path="/songs/delete/:id" exact />
                            <SongShow path="/songs/:id" exact />
                            <NotFound path="**" exact />
                        </Switch>
                    </div>
                </Router>
            </Suspense>
        </div>
    );
};

export default App;