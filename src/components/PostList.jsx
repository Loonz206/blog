import React, { Component } from "react";
import { connect } from "react-redux";
import fetchPosts from "../actions";

class PostList extends Component {
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
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
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

PostList.defaultProps = {
  posts: []
};

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { getPosts: fetchPosts }
)(PostList);
