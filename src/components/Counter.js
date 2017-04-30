import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {
  handleIncrement() {
    this.props.actions.incrementAsync();
  }

  handleDecrement() {
    this.props.actions.decrementAsync();
  }

  render() {
    return (
      <div>
        <p>Click the counter for asynchronous actions!</p>
        <div>{this.props.counter}</div>
        <br />
        <div>
          <button onClick={() => { this.handleDecrement(); }}>-</button>
          <button onClick={() => { this.handleIncrement(); }}>+</button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};
