import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Button from '@material-ui/core/Button';
import { Grid, TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';

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

class EditablePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      content: this.props.content,
    };

    this.editToggle = this.editToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendNewPost = this.sendNewPost.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  handleDelete() {
    const { handleDeletePost } = this.props;
    handleDeletePost();
  }

  sendNewPost() {
    const { handleEditPost } = this.props;
    const { content } = this.state;

    this.setState({
      isEdit: false,
    });

    handleEditPost(content);
  }

  editToggle() {
    this.setState(({ isEdit }) => ({
      isEdit: !isEdit,
    }));
  }

  render() {
    const { classes, title, date, author, currentUser } = this.props;
    const { isEdit, content } = this.state;
    return (
      <div>
        <h1>Post</h1>
        <Card className={classes.card}>
          <Grid container direction="column">
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  {author.name[0].toUpperCase()}
                </Avatar>
              }
              action={
                <IconButton onClick={this.editToggle}>
                  <EditIcon />
                </IconButton>
              }
              title={title}
              subheader={`${date} by ${author.name}`}
            />
            <CardContent>
              {isEdit && currentUser.id === author.id ? (
                <TextField
                  label="Post"
                  multiline
                  rows={5}
                  value={content}
                  margin="normal"
                  fullWidth
                  onChange={this.handleChange}
                />
              ) : (
                <Typography component="p">{`${content}`}</Typography>
              )}
            </CardContent>
          </Grid>
          <Grid container direction="row-reverse">
            <Button
              variant="fab"
              color="primary"
              aria-label="add"
              className={classes['done-button']}
              disabled={
                title.trim() === '' || content.trim() === '' ? true : false
              }
              onClick={this.sendNewPost}
            >
              <DoneIcon />
            </Button>
            <Button
              variant="fab"
              aria-label="delete"
              className={classes['delete-button']}
              onClick={
                currentUser.id === author.id ? this.handleDelete : () => {}
              }
            >
              <DeleteIcon />
            </Button>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(EditablePost);
