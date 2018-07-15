import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
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

class SingleComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      content: this.props.content,
    };

    this.editToggle = this.editToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendNewComment = this.sendNewComment.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.findUserById = this.findUserById.bind(this);
  }

  handleChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  handleDelete() {
    const { handleDeleteComment } = this.props;
    handleDeleteComment();
  }

  sendNewComment() {
    const { handleEditComment } = this.props;
    const { content } = this.state;

    this.setState({
      isEdit: false,
    });

    handleEditComment(content);
  }

  editToggle() {
    this.setState(({ isEdit }) => ({
      isEdit: !isEdit,
    }));
  }

  findUserById(id, users) {
    const [findedUser] = users.filter(user => user.id === id);
    return findedUser;
  }

  render() {
    const { date, userId, users, classes } = this.props;

    const userName = this.findUserById(userId, users).name;
    const { isEdit, content } = this.state;

    return (
      <div>
        <Card className={classes.card}>
          <Grid container direction="column">
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  {userName[0].toUpperCase()}
                </Avatar>
              }
              action={
                <IconButton onClick={this.editToggle}>
                  <EditIcon />
                </IconButton>
              }
              subheader={`${date} by ${userName}`}
            />
            <CardContent>
              {isEdit ? (
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
            <IconButton
              disabled={content.trim() === '' ? true : false}
              onClick={this.sendNewComment}
              aria-label="Delete"
            >
              <DoneIcon />
            </IconButton>
            <IconButton onClick={this.handleDelete} aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(SingleComment);
