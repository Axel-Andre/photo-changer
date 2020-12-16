import React from "react";
import { getPhoto, setPhoto } from "../utils/actions";
import "./App.scss";

export class App extends React.Component<{}, { url: string }> {
  state = {
    url: ''
  }
  componentDidMount = () => {
    getPhoto((url) => {
      this.setState({ url: url });
    });
  }
  handleClick = () => {
    const { url } = this.state;
    setPhoto(url);
  }

  render() {
    return <div className="app">
      <h1>Photo changer</h1>
      {this.state.url && <img src={this.state.url} className="app__photo"/>}
      <input type="text" className="app__input" onChange={(event) => this.setState({ url: event.target.value })} />
      <br />
      <button
        onClick={this.handleClick}
        className="app__button"
      >
        Change picture
      </button>
    </div>;
  }
}

export default App;
