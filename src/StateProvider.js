import React, { createContext, useContext, useReducer } from "react";

// Prepration of data Layer
export const StateContext = createContext();

//Wrap our app and provide data layer
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};
// Pulls information fromm data layer

export const useStateValue = () => useContext(StateContext);
