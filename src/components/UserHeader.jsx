import React, { Component } from "react";
import { shape, string } from "prop-types";
import { connect } from "react-redux";

// Would love to see hooks handle this instead.. TODO: LKP
// eslint-disable-next-line react/prefer-stateless-function
class UserHeader extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

UserHeader.defaultProps = {
  user: {
    name: null
  }
};

UserHeader.propTypes = {
  user: shape({
    name: string
  })
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
