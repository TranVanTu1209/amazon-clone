import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Checkout from './components/Checkout';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { useStateValue } from './context/StateProvider';
import { auth } from './firebase';
import * as actionTypes from './context/types';

function App() {

  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser)
      {
        // the user ig logged in
        dispatch({
          type: actionTypes.SET_USER,
          payload: authUser
        });
      } else
      {
        // the user is logged out
        dispatch({
          type: actionTypes.LOGOUT
        });
      }
    });
    return () => {
      // any clean up operations go in here
      unsubscribe();
    }
  }, []);
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main__body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/checkout" component={Checkout} />
            <Route path="*" render={() => <Redirect to="/" />} />
          </Switch >
        </main>
      </div>
    </Router>
  );
}

export default App;
