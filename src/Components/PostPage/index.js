import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom';

import SinglePost from '../CardBox';
import Comments from '../Comments';
class PostPage extends React.Component {
  render() {
    const {
      postId,
      posts,
      users,
      handleEditPost,
      handleDeletePost,
      comments,
    } = this.props;

    const [neededPost] = posts.filter(post => +post.id === +postId);

    if (!neededPost) {
      return <Redirect to="/" />;
    }

    const { userId, title, content, date, id } = neededPost;
    const neededComments = comments.filter(comment => (comment.postId = id));
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
          <Comments comments={neededComments} users={users} />
        </Grid>
      </Grid>
    );
  }
}

export default PostPage;
