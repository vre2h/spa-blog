import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import EditablePost from './EditablePost';
import NoneditablePost from './NoneditablePost';

import findUserById from '../Main/findUserById';

const styles = theme => ({
  card: {
    margin: '20px',
    padding: '20px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  button: {
    marginLeft: 'auto',
  },
  'done-button': {
    marginLeft: '20px',
  },
  'delete-button': {
    marginLeft: '20px',
  },
});

const SinglePost = props => {
  const {
    title,
    content,
    date,
    id,
    userId,
    users,
    isPostPage,
    handleEditPost,
    handleDeletePost,
    currentUser,
  } = props;
  const user = findUserById(userId, users);

  return (
    <div>
      {isPostPage ? (
        <EditablePost
          title={title}
          content={content}
          date={date}
          id={id}
          author={user}
          currentUser={currentUser}
          handleEditPost={handleEditPost.bind(this, {
            title,
            content,
            id,
            date,
            userId,
          })}
          handleDeletePost={handleDeletePost.bind(this, {
            title,
            content,
            id,
            date,
            userId,
          })}
        />
      ) : (
        <NoneditablePost
          title={title}
          content={content}
          date={date}
          id={id}
          author={user}
        />
      )}
    </div>
  );
};

SinglePost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SinglePost);
