import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const styles = {
  root: {},

  container: {
    margin: '20px',
    padding: '20px',
  },

  button: {
    margin: '10px',
  },
};

class CreateComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      id: '',
      content: '',
      userId: '',
      postId: '',
    };

    this.handleComment = this.handleComment.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleContent = this.handleContent.bind(this);
  }

  static commentId = 10;

  handleTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleContent(event) {
    this.setState({
      content: event.target.value,
    });
  }

  handleComment() {
    const { addComment, user, post } = this.props;
    const { title, content } = this.state;

    addComment({
      userId: user.id,
      postId: post.id,
      title,
      content,
      id: (CreateComment.commentId += 1),
      date: ('' + new Date()).substr(4, 11),
    });
    this.setState({ id: '', title: '', content: '', userId: '', postId: '' });
  }

  render() {
    const { classes } = this.props;
    const { title, content } = this.state;

    return (
      <Grid container justify="center">
        <Grid item xs={12} sm={9}>
          <Paper className={classes.container}>
            <Typography align="center" color="secondary" variant="title">
              Tell us your story!
            </Typography>
            <Grid container>
              <Grid item xs={12} sm={9}>
                <TextField
                  error={title.trim() === '' ? true : false}
                  fullWidth
                  required
                  label="Title"
                  value={title}
                  className={classes.textField}
                  margin="normal"
                  placeholder="..."
                  onChange={this.handleTitle}
                />
              </Grid>
            </Grid>
            <TextField
              error={content.trim() === '' ? true : false}
              label="Content"
              margin="normal"
              value={content}
              required
              fullWidth
              multiline
              rows={4}
              rowsMax={5}
              placeholder="Write your comment..."
              onChange={this.handleContent}
            />
            <Grid container direction="row-reverse">
              <Button
                variant="fab"
                color="primary"
                aria-label="add"
                className={classes.button}
                onClick={this.handleComment}
                disabled={
                  title.trim() === '' || content.trim() === '' ? true : false
                }
              >
                <DoneIcon />
              </Button>
              <Button
                variant="fab"
                disabled
                color="secondary"
                aria-label="edit"
                className={classes.button}
              >
                <EditIcon />
              </Button>
              <Button
                variant="fab"
                disabled
                aria-label="delete"
                className={classes.button}
              >
                <DeleteIcon />
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(CreateComment);
