import React from "react";
import { shape, string } from "prop-types";
import { connect } from "react-redux";

const UserHeader = ({ user }) => {
  if (!user) {
    return null;
  }
  return <div className="header">{user.name}</div>;
};

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
