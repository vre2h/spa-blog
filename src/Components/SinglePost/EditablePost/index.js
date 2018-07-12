import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
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
  render() {
    const { classes, title, content, date, userName } = this.props;
    return (
      <div>
        <h1>Page of {title}</h1>
        <Card className={classes.card}>
          <Grid container direction="column">
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  {userName}
                </Avatar>
              }
              action={
                <IconButton>
                  <EditIcon />
                </IconButton>
              }
              title={title}
              subheader={date}
            />
            <CardContent>
              <Typography component="p">{`${content.slice(
                0,
                200
              )}...`}</Typography>
            </CardContent>
          </Grid>
          <Grid container direction="row-reverse">
            <Button
              variant="fab"
              color="primary"
              aria-label="add"
              className={classes['done-button']}
              onClick={this.handlePost}
              disabled={
                title.trim() === '' || content.trim() === '' ? true : false
              }
            >
              <DoneIcon />
            </Button>
            <Button
              variant="fab"
              aria-label="delete"
              className={classes['delete-button']}
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
