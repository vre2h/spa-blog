import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        rest.isLoggedIn ? (
          <Component {...props} {...rest} postId={props.match.params.postId} />
        ) : (
          <Redirect
            to={{
              pathname: '/spa-blog/auth',
              state: { referrer: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
