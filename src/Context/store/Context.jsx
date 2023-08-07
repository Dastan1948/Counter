import React, { useReducer } from "react";
import counterContext from "./counterContext";

const defaultState = {
  counter: 0
}

function counterReducer(state, action) {
  if(action.type === 'INC') {
    return {
      counter: action.payload
    }
  }

  if(action.type === 'DEC') {
    return {
      counter: action.payload
    }
  }

  if(action.type === 'INC10') {
    return {
      counter: action.payload
    }
  }

  if(action.type === 'DEC10') {
    return {
      counter: action.payload
    }
  }

  if(action.type === 'RESET') {
    return {
      counter: action.payload
    }
  }

  return state;
}

const Context = ({children}) => {
  const [counterState, dispatchCounterState] = useReducer(counterReducer, defaultState)

  function increment() {
    dispatchCounterState({
      type: 'INC',
      payload: counterState.counter + 1
    })
  }

  function decrement() {
    dispatchCounterState({
      type: 'DEC',
      payload: counterState.counter - 1
    })
  }

  function increment10() {
    dispatchCounterState({
      type: 'INC10',
      payload: counterState.counter + 10
    })
  }

  function decrement10() {
    dispatchCounterState({
      type: 'DEC10',
      payload: counterState.counter - 10
    })
  }

  function reset() {
    dispatchCounterState({
      type: 'RESET',
      payload: counterState.counter = 0
    })
  }

  const value = {counter: counterState.counter ,increment, decrement, increment10, decrement10, reset}

  return ( 
    <counterContext.Provider value={value}>
      {children}
    </counterContext.Provider>
   );
}
 
export default Context;