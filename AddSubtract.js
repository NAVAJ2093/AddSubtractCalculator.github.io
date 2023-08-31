import React, { Component } from 'react';
import './App.css'; 

class AddSubtract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      resultValue: 20,
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleAddClick = () => {
    const { inputValue, resultValue } = this.state;
    const newValue = resultValue + parseInt(inputValue);
    this.setState({ resultValue: newValue });
  };

  handleSubtractClick = () => {
    const { inputValue, resultValue } = this.state;
    const newValue = resultValue - parseInt(inputValue);
    this.setState({ resultValue: newValue });
  };

  render() {
    const { inputValue, resultValue } = this.state;

    return (
      <div className="container">
      <h1> Enter a value to add/subtract </h1>
        <input
          type="number"
          value={inputValue}
          onChange={this.handleInputChange}
          className="input-field"
        /> <br></br>
        <button onClick={this.handleAddClick} className="add-button">
          Add
        </button> <br></br>
        <button onClick={this.handleSubtractClick} className="subtract-button">
          Subtract
        </button>
        <div className="result">Result: {resultValue}</div>
      </div>
    );
  }
}

export default AddSubtract;
