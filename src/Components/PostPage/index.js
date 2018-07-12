import React from 'react';
import Grid from '@material-ui/core/Grid';

import SinglePost from '../CardBox';
import { Redirect } from 'react-router-dom';
class PostPage extends React.Component {
  render() {
    const {
      postId,
      posts,
      users,
      handleEditPost,
      handleDeletePost,
    } = this.props;

    const [neededPost] = posts.filter(post => +post.id === +postId);

    if (!neededPost) {
      return <Redirect to="/" />;
    }

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
            handleEditPost={handleEditPost}
            handleDeletePost={handleDeletePost}
          />
        </Grid>
      </Grid>
    );
  }
}

export default PostPage;
