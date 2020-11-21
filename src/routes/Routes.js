import React, { useContext } from 'react';
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import Register from '../components/Register';
import Login from '../components/Login';
import TodoContainer from '../components/TodoContainer';
import AuthContext from '../contexts/AuthContext';

const Routes = () => {

    const { isAuth } = useContext(AuthContext);

    return (
        <Switch>
            <Route path="/register" exact><Register /></Route>
            <Route path="/login" exact><Login /></Route>

            <ProtectedRoute path="/" component={TodoContainer} auth={isAuth}/>
        </Switch>
    )
}

export default Routes;
