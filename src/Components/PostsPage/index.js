import React from 'react';
import Grid from '@material-ui/core/Grid';

import SinglePost from '../SinglePost';

class Posts extends React.Component {
  render() {
    const { posts, users } = this.props;

    return (
      <Grid container justify="center">
        {posts.map(({ userId, title, content, date, id }) => (
          <Grid key={id} item xs={12} sm={9}>
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
