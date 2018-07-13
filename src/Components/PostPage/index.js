import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom';

import SinglePost from '../SinglePost';
import Comments from '../Comments';
import CreateComment from '../CreateComment';

class PostPage extends React.Component {
  render() {
    const {
      postId,
      posts,
      users,
      comments,
      handleEditPost,
      handleDeletePost,
      handleEditComment,
      handleDeleteComment,
      addComment,
      user,
    } = this.props;

    const [neededPost] = posts.filter(post => {
      return +post.id === +postId;
    });

    if (!neededPost) {
      return <Redirect to="/" />;
    }

    const { userId, title, content, date, id } = neededPost;
    const neededComments = comments.filter(comment => comment.postId === id);

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
          <h2>Comments</h2>
          <CreateComment
            post={neededPost}
            addComment={addComment}
            user={user}
          />
          <Comments
            comments={neededComments}
            users={users}
            handleEditComment={handleEditComment}
            handleDeleteComment={handleDeleteComment}
          />
        </Grid>
      </Grid>
    );
  }
}

export default PostPage;