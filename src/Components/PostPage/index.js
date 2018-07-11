import React from 'react';
import Grid from '@material-ui/core/Grid';

import SinglePost from '../SinglePost';

class PostPage extends React.Component {
  render() {
    const { postId, posts, users } = this.props;
    const [neededPost] = posts.filter(post => +post.id === +postId);
    const { userId, title, content, date, id } = neededPost;
    return (
      <Grid container justify="center">
        <Grid key={id} item xs={12} sm={9}>
          <SinglePost
            userId={userId}
            title={title}
            content={content}
            date={date}
            id={id}
            users={users}
            isPostPage={true}
          />
        </Grid>
      </Grid>
    );
  }
}

export default PostPage;
