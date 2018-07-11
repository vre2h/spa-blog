import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
      classes,
      title,
      content,
      date,
      id,
      userId,
      users,
      isPostPage,
    } = this.props;
    const userName = this.findUserById(userId, users).name[0].toUpperCase();

    return (
      <div>
        {isPostPage && <h1>Page of {title}</h1>}
        <Card className={classes.card}>
          <Grid container direction="column">
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  {userName}
                </Avatar>
              }
              action={
                isPostPage ? (
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                ) : (
                  ''
                )
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
            <Button
              className={classes.button}
              size="large"
              color="secondary"
              component={Link}
              to={`/post/${id}`}
            >
              Learn More
            </Button>
          </Grid>
        </Card>
      </div>
    );
  }
}

SinglePost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SinglePost);
