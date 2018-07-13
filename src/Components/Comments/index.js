import React from 'react';
import Grid from '@material-ui/core/Grid';

import SingleComment from '../CardBox';

class Comments extends React.Component {
  render() {
    const { comments, users } = this.props;

    return (
      <Grid container justify="center">
        {comments.map(({ userId, title, content, date, id, postId }) => (
          <Grid key={id} item xs={12} sm={9}>
            <SingleComment
              userId={userId}
              title={title}
              content={content}
              date={date}
              id={id}
              users={users}
              isPostPage={true}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default Comments;
