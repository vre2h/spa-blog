import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import HomeIcon from './HomeIcon';

const styles = {
  root: {
    flexGrow: 1,
  },
  logo: {
    color: 'inherit',
    marginRight: '50px',
    fontSize: '26px',
    textDecoration: 'none',
  },
  toolbar: {
    display: 'flex',
    textAlign: 'center',
  },
  'nav-item-font': {
    color: '#fff',
    fontSize: '18px',
  },
  logInLink: {
    marginLeft: 'auto',
  },
  icon: {
    fontSize: '16px',
  },
};

function SimpleAppBar(props) {
  const { classes, isLoggedIn } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolbar}>
          <Typography variant="title" color="inherit">
            <Link to="/" className={classes.logo}>
              <HomeIcon className={classes.icon} />
              Blog
            </Link>
          </Typography>

          <Link to="/blog/create">
            <MenuItem className={classes['nav-item-font']}>
              Create Post
            </MenuItem>
          </Link>

          <Link to="/login" className={classes.logInLink}>
            {isLoggedIn ? (
              <MenuItem className={classes['nav-item-font']}>Log In</MenuItem>
            ) : (
              <MenuItem className={classes['nav-item-font']}>Log Out</MenuItem>
            )}
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
