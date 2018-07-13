import React from 'react';
import Grid from '@material-ui/core/Grid';

import SinglePost from '../SinglePost';

class Posts extends React.Component {
  render() {
    const { posts, users } = this.props;

    if (posts.length === 0) {
      return (
        <Grid container direction="column" alignItems="center" justify="center">
          <h2>There is no post on web-site.</h2>
          <h1>Log in and be our first story teller.</h1>
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
              isPostPage={false}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default Posts;
