import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SimpleLoader } from './common/components/SimpleLoader';
import './App.css';

function App() {
  const Movies = lazy(() => import(/* webpackChunkName: "Movies" */ './modules/movies/Movies'));
  const Movie = lazy(() => import(/* webpackChunkName: "Movies" */ './modules/movie/Movie'));

  return (
    <div className='flex flex-col w-full bg-gray-200 min-h-screen overflow-y-hidden'>
      <Router>
        <Switch>
          <Suspense fallback={<SimpleLoader />}>
            <Route exact path='/' component={Movies} />
            <Route exact path='/movies' component={Movies} />
            <Route exact path='/movies/:movieId' component={Movie} />
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
