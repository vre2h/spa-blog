import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
  component: Component,
  isLoggedIn,
  addPost,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} addPost={addPost} user={user} />
      ) : (
        <Redirect
          to={{
            pathname: '/auth',
            state: { referrer: props.location },
          }}
        />
      )
    }
  />
);

export default ProtectedRoute;
