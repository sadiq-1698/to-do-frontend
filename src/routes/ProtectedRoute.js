import React from 'react';
import { Route, Redirect} from 'react-router-dom';

const ProtectedRoute = ({auth : isAuth, component : Component, ...rest}) => {
    
    return (
        <Route exact {...rest} 
            render = {
                ({location}) => {
                    return isAuth
                    ? 
                    <Component /> 
                    :
                    <Redirect 
                        to={{
                            pathname:"/login",
                            state : {from : location}
                        }} 
                    />
                }
            }
        />
    );
}


export default ProtectedRoute;
