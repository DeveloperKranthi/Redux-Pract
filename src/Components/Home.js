import React, { Component, PureComponent } from "react";
import Axios from "axios";
import Store from "../Redux/Store";

class Home extends PureComponent {
  componentDidMount() {
    Axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      Store.dispatch({ type: "USER", payload: res.data });
      console.log(res.data);
    });

    Axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      Store.dispatch({ type: "POST", payload: res.data });
      console.log(res.data);
    });
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}
export default Home;
