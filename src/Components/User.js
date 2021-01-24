import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";

class User extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userData: this.props.storeData,
    };
  }

  render() {
    return (
      <div className="container">
        <table>
          <tr>
            <th>name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
          {this.state.userData.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default connect((store) => {
  return {
    storeData: store.myReducer.userInformation,
  };
})(User);
