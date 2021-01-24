import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";

class Post extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      post: this.props.postData,
    };
  }

  render() {
    return (
      <div>
        {this.state.post.map((posts) => {
          return (
            <tr>
              <b>{posts.title}</b>
              <p>{posts.title}</p>
            </tr>
          );
        })}
      </div>
    );
  }
}

export default connect((store) => {
  return { postData: store.myReducer.postInformation };
})(Post);
