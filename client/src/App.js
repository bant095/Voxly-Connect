import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import PrivateRouter from './customRouter/PrivateRouter';

import PageRender from './customRouter/PageRender';
import Header from './components/header/Header';
import Alert from './components/alert/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { refreshToken } from './redux/actions/authAction';

import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <Router>
      <Alert />

      <input type='checkbox' id='theme' />
      <div className='App'>
        <div className='main'>
          {auth.token && <Header />}
          <Routes>
            {/* Public Routes */}
            <Route exact path='/' element={auth.token ? <Home /> : <Login />} />
            <Route exact path='/register' element={<Register />} />

            {/* Protected Routes */}
            <Route element={<PrivateRouter />}>
              <Route path='/:page' element={<PageRender />} />
              <Route path='/:page/:id' element={<PageRender />} />
            </Route>

            {/* Home Route (public by default) */}
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
