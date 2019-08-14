import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "0"
    };
  }

  addToInput = (val) => {
    this.setState({
        input: this.state.input === '0' ? val : this.state.input + val});
  };

  addToInputDivide = () => {
    if (this.state.input.indexOf('/') === -1) {
      this.setState({
          input: this.state.input + '/'
      })
    }
  };

    addToInputMultiply = (handleEqual) => {
        if (this.state.input.indexOf('*') === -1) {
            this.setState({
                input: this.state.input + '*'
            })
        }
    };

    addToInputMinus = () => {
        if (this.state.input.indexOf('-') === -1) {
            this.setState({
                input: this.state.input + '-'
            })
        }
    };

    addToInputPlus = () => {
        if (this.state.input.indexOf('+') === -1) {
            this.setState({
                input: this.state.input + '+',
            })
        } else if (this.state.input.indexOf('+') === 1) {
          this.setState({
              input: this.state.input + '+'
              }
          )
        }
    };

  handleEqual = () => {
    this.setState({
        input: eval(this.state.input)
    })
  };


  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInputDivide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInputMultiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInputMinus}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: '0' })}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
