import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from '../../Helpers/Scroll/';
import MainNav from '../MainNav';
import Posts from '../PostsPage';
import CreatePost from '../CreatePost';
import Authentication from '../Authentication';
import ProtectedRoute from '../ProtectedRoute';
import delRepeated from './DelRepeated';
import PostPage from '../PostPage';

class Main extends React.Component {
  constructor(props) {
    super(props);

    const users = JSON.parse(localStorage.getItem('users'));
    const comments = JSON.parse(localStorage.getItem('comments'));
    const posts = JSON.parse(localStorage.getItem('posts'));

    this.state = {
      isLoggedIn: users ? true : false,
      isLogInFormOpen: false,
      users: users || [],
      comments: comments || [],
      posts: posts || [],
    };

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.logInFormOpen = this.logInFormOpen.bind(this);
    this.logInFormClose = this.logInFormClose.bind(this);
    this.addUserAndLogIn = this.addUserAndLogIn.bind(this);
    this.addPost = this.addPost.bind(this);
    this.addComment = this.addComment.bind(this);
    this.handleEditPost = this.handleEditPost.bind(this);
    this.handleDeletePost = this.handleDeletePost.bind(this);
    this.handleEditComment = this.handleEditComment.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  handleEditComment(comment, content) {
    const { comments } = this.state;
    const newComments = comments.reduce((acc, elem) => {
      if (elem.id === comment.id) {
        return [...acc, { ...elem, content }];
      }

      return [...acc, elem];
    }, []);

    localStorage.setItem('comments', JSON.stringify(newComments));

    this.setState({
      comments: newComments,
    });
  }

  handleDeleteComment(comment) {
    const { comments } = this.state;

    const newComments = comments.filter(item => comment.id !== item.id);

    localStorage.setItem('comments', JSON.stringify(newComments));

    this.setState({
      comments: newComments,
    });
  }

  addComment(newComment) {
    const { comments } = this.state;
    const newComments = [newComment, ...comments];

    localStorage.setItem('comments', JSON.stringify(newComments));

    this.setState({
      comments: newComments,
    });
  }

  handleEditPost(post, content) {
    const { posts } = this.state;
    const newPosts = posts.reduce((acc, elem) => {
      if (elem.id === post.id) {
        return [...acc, { ...elem, content }];
      }

      return [...acc, elem];
    }, []);

    localStorage.setItem('posts', JSON.stringify(newPosts));

    this.setState({
      posts: newPosts,
    });
  }

  handleDeletePost(post) {
    const { posts } = this.state;

    const newPosts = posts.filter(item => post.id !== item.id);

    localStorage.setItem('posts', JSON.stringify(newPosts));

    this.setState({
      posts: newPosts,
    });
  }

  addUserAndLogIn(newUser) {
    const { users } = this.state;
    const filtered = delRepeated(newUser, users);

    const newUsers = filtered.concat(newUser);

    localStorage.setItem('users', JSON.stringify(newUsers));

    this.setState({
      users: newUsers,
    });
    this.logIn();
  }

  addPost(newPost) {
    const { posts } = this.state;
    const newPosts = [newPost, ...posts];

    localStorage.setItem('posts', JSON.stringify(newPosts));

    this.setState({
      posts: newPosts,
    });
  }

  logIn() {
    this.setState(({ isLoggedIn }) => ({
      isLoggedIn: true,
    }));
  }

  logOut() {
    this.setState(({ isLoggedIn }) => ({
      isLoggedIn: false,
    }));
  }

  logInFormOpen() {
    this.setState({
      isLogInFormOpen: true,
    });
  }

  logInFormClose() {
    this.setState({
      isLogInFormOpen: false,
    });
  }

  render() {
    const { isLoggedIn, isLogInFormOpen, posts, comments, users } = this.state;
    const user = users[users.length - 1];
    return (
      <Router>
        <ScrollToTop>
          <MainNav isLoggedIn={isLoggedIn} logInFormOpen={this.logInFormOpen} />

          <Switch>
            <Route
              exact
              path="/spa-blog"
              component={props => (
                <Posts {...props} posts={posts} users={users} />
              )}
            />
            <Route
              path="/spa-blog/auth"
              render={props => (
                <Authentication
                  {...props}
                  isLoggedIn={isLoggedIn}
                  addUserAndLogIn={this.addUserAndLogIn}
                  logOut={this.logOut}
                  isLogInFormOpen={isLogInFormOpen}
                  logInFormClose={this.logInFormClose}
                  addUser={this.addUser}
                />
              )}
            />
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              path="/spa-blog/blog/create"
              component={CreatePost}
              addPost={this.addPost}
              user={user}
            />
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              path={`/spa-blog/post/:postId`}
              component={PostPage}
              posts={posts}
              users={users}
              handleEditPost={this.handleEditPost}
              handleDeletePost={this.handleDeletePost}
              handleEditComment={this.handleEditComment}
              handleDeleteComment={this.handleDeleteComment}
              comments={comments}
              addComment={this.addComment}
              user={user}
            />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default Main;
