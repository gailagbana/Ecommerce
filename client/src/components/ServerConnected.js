import { Component } from "react";
//import { BrowserRouter as Router } from "react-router-dom";

class ServerConnected extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  callAPI() {
    fetch("http://localhost:3001/test/api")
      .then((response) => response.text())
      .then((response) => this.setState({ apiResponse: response }));
  }
  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div>
        <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default ServerConnected;
