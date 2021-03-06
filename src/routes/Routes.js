import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import Register from '../components/Register';
import Login from '../components/Login';
import TodoContainer from '../components/TodoContainer';
import { useAuth } from '../contexts/AppAuthContext';

const Routes = () => {

    const isAuth = useAuth();

    return (
      <Router>
        <Switch>
            <Route path="/register" exact><Register /></Route>
            <Route path="/login" exact><Login /></Route>

            <ProtectedRoute path="/" component={TodoContainer} auth={isAuth} />
        </Switch>
      </Router>
    )
}

export default Routes;
