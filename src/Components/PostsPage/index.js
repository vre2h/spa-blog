import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import SinglePost from '../SinglePost';

class Posts extends React.Component {
  render() {
    const { posts, users, isLoggedIn } = this.props;

    if (posts.length === 0) {
      return (
        <Grid container direction="column" alignItems="center" justify="center">
          <h2>There is no post on web-site.</h2>
          {!isLoggedIn ? (
            <h1>
              <Link to="/spa-blog/auth">Log in</Link> and be our first story
              teller.
            </h1>
          ) : (
            <h1>
              You've logged in,{' '}
              <Link to="/spa-blog/blog/create">share your story!</Link>
            </h1>
          )}
        </Grid>
      );
    }

    return (
      <Grid container direction="column" alignItems="center">
        <h1>Posts:</h1>
        {posts.map(({ userId, title, content, date, id }) => (
          <Grid style={{ width: '100%' }} key={id} item xs={12} sm={9}>
            <SinglePost
              userId={userId}
              title={title}
              content={content}
              date={date}
              id={id}
              users={users}
              isEditable={false}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default Posts;
