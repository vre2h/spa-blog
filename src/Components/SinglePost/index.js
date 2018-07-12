import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import EditablePost from './EditablePost';
import NoneditablePost from './NoneditablePost';

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

class SinglePost extends React.Component {
  constructor(props) {
    super(props);

    this.findUserById = this.findUserById.bind(this);
  }

  findUserById(id, users) {
    return users.filter(user => user.id === id)[0];
  }

  render() {
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
    } = this.props;

    const userName = this.findUserById(userId, users).name[0].toUpperCase();

    return (
      <div>
        {isPostPage ? (
          <EditablePost
            title={title}
            content={content}
            date={date}
            id={id}
            userName={userName}
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
            userName={userName}
          />
        )}
      </div>
    );
  }
}

SinglePost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SinglePost);
