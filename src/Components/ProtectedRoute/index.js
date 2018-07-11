import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
  component: Component,
  isLoggedIn,
  addPost,
  userId,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} addPost={addPost} userId={userId} />
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
