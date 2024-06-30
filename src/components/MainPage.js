import React from "react";
import { useHistory } from "react-router-dom";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedOption !== this.state.selectedOption) {
      console.log("Selected option:", this.state.selectedOption); 
    }
  }

  handleOptionChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const history = useHistory(); 
    if (this.state.selectedOption === "object") {
      history.push("/object");
    } else if (this.state.selectedOption === "human") {
      history.push("/human");
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="radio"
              value="object"
              checked={this.state.selectedOption === "object"}
              onChange={this.handleOptionChange}
            />
            Object
          </label>
          <label>
            <input
              type="radio"
              value="human"
              checked={this.state.selectedOption === "human"}
              onChange={this.handleOptionChange}
            />
            Human
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default MainPage;
