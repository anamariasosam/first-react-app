import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: props.initialScore,
    }

    // Functions must be bound manually with ES6 classes
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      score: (this.state.score + 1)
    });
  }

  decrement() {
    this.setState({
      score: (this.state.score - 1)
    });
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrement}> - </button>
        <div className="counter-score">
          {this.state.score}
        </div>
        <button className="counter-action increment" onClick={this.increment}> + </button>
      </div>
    );
  }
}

Counter.propTypes = {
  initialScore: PropTypes.number.isRequired,
};

export default Counter;
