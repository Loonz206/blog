import React, { Component } from "react";
import { arrayOf, shape, number, func } from "prop-types";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends Component {
  componentDidMount() {
    const { getPostsAndUsers } = this.props;
    getPostsAndUsers();
  }

  renderList() {
    const { posts } = this.props;
    return posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

PostList.propTypes = {
  posts: arrayOf(
    shape({
      id: number,
      userId: number
    })
  ).isRequired,
  getPostsAndUsers: func.isRequired
};

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { getPostsAndUsers: fetchPostsAndUsers }
)(PostList);
