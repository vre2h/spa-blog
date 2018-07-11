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

class CreatePost extends React.Component {
  render() {
    const { classes } = this.props;
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
                  fullWidth
                  required
                  label="Title"
                  defaultValue=""
                  className={classes.textField}
                  margin="normal"
                  placeholder="..."
                />
              </Grid>
            </Grid>
            <TextField
              label="Content"
              margin="normal"
              required
              fullWidth
              multiline
              rows={10}
              rowsMax={10}
              placeholder="Write your post..."
            />
            <Grid container direction="row-reverse">
              <Button
                variant="fab"
                color="primary"
                aria-label="add"
                className={classes.button}
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

export default withStyles(styles)(CreatePost);
