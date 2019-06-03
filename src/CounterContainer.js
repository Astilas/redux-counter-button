import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class CounterComponent extends Component {

  render() {
    const { counter , dispatch } = this.props;
    return (
      <div>
       <p> {counter} </p>
       <button onClick={() => dispatch({ type: 'ADD'})}>
         ADD 1
       </button>
       <button onClick={() => dispatch({ type: 'ADD10'})}>
         ADD 10
       </button>
       <button onClick={() => dispatch({ type: 'REMOVE'})}>
          REMOVE 1
       </button>
       <button onClick={() => dispatch({ type: 'REMOVE10'})}>
         REMOVE 10
       </button>
       <button onClick={() => dispatch({ type: 'RESET'})}>
         RESET
       </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  counter: state
});
const CounterContainer = connect(mapStateToProps)(CounterComponent);

export default CounterContainer;