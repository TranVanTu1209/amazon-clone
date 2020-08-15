import React, { createContext, useReducer, useContext } from 'react';

//  set up data layer

// We need this to track the basket

// this is data layer
export const StateContext = createContext();

// build a provider

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)} >
    {
      children
    }
  </StateContext.Provider>
);

// this is how we use context in our component
export const useStateValue = () => useContext(StateContext);