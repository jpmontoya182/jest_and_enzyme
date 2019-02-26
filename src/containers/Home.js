import React, { Component } from "react";
import List from "../components/List";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Juan", "Montoya"]
    };
  }

  render() {
    return (
      <div>
        <h1>Hola bebe</h1>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default Home;
