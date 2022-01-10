import React, { useReducer } from "react";

const initialState = {
  isSelected1: false,

  isSelected2: false,

  isSelected3: false,

  isSelected4: true,

  isSelected5: true,

  status: "Low",
};

/*

This is a fully functional first iteration of the component, 

this can be refactored with a more concise way, 

see on the Bars_v2.js

*/

const reducer = (state, action) => {
  switch (action.type) {
    case "selected1":
      if (state.isSelected1 === false) {
        return {
          isSelected1: true,
          isSelected2: true,
          isSelected3: true,
          isSelected4: true,
          isSelected5: true,
          status: "High",
        };
      } else {
        return {
          isSelected1: true,
          isSelected2: true,
          isSelected3: true,
          isSelected4: true,
          isSelected5: true,
          status: "High",
        };
      }
    case "selected2":
      if (state.isSelected2 === false) {
        return {
          isSelected1: false,
          isSelected2: true,
          isSelected3: true,
          isSelected4: true,
          isSelected5: true,
          status: "High",
        };
      } else {
        return {
          isSelected1: false,
          isSelected2: true,
          isSelected3: true,
          isSelected4: true,
          isSelected5: true,
          status: "High",
        };
      }
    case "selected3":
      if (state.isSelected3 === false) {
        return {
          isSelected1: false,
          isSelected2: false,
          isSelected3: true,
          isSelected4: true,
          isSelected5: true,
          status: "Medium",
        };
      } else {
        return {
          isSelected1: false,
          isSelected2: false,
          isSelected3: true,
          isSelected4: true,
          isSelected5: true,
          status: "Medium",
        };
      }
    case "selected4":
      if (state.isSelected4 === false) {
        return {
          isSelected1: false,
          isSelected2: false,
          isSelected3: false,
          isSelected4: true,
          isSelected5: true,
          status: "Low",
        };
      } else {
        return {
          isSelected1: false,
          isSelected2: false,
          isSelected3: false,
          isSelected4: true,
          isSelected5: true,
          status: "Low",
        };
      }
    case "selected5":
      if (state.isSelected5 === false) {
        return {
          isSelected1: false,
          isSelected2: false,
          isSelected3: false,
          isSelected4: false,
          isSelected5: true,
          status: "Low",
        };
      } else {
        return {
          isSelected1: false,
          isSelected2: false,
          isSelected3: false,
          isSelected4: false,
          isSelected5: true,
          status: "Low",
        };
      }
    default:
      throw new Error();
  }
};

const Bar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="text" data-testid="status">
        {state.status}
      </div>
      <div className="bars">
        <div
          className={
            state.isSelected1
              ? "activeColor bar bar1"
              : "inActiveColor bar bar1"
          }
          onClick={() => dispatch({ type: "selected1" })}
          data-testid="bar1"
        ></div>
        <div
          className={
            state.isSelected2
              ? "activeColor bar bar2"
              : "inActiveColor bar bar2"
          }
          onClick={() => dispatch({ type: "selected2" })}
          data-testid="bar2"
        ></div>
        <div
          className={
            state.isSelected3
              ? "activeColor bar bar3"
              : "inActiveColor bar bar3"
          }
          onClick={() => dispatch({ type: "selected3" })}
          data-testid="bar3"
        ></div>
        <div
          className={
            state.isSelected4
              ? "activeColor bar bar4"
              : "inActiveColor bar bar4"
          }
          onClick={() => dispatch({ type: "selected4" })}
          data-testid="bar4"
        ></div>
        <div
          className={
            state.isSelected5
              ? "activeColor bar bar5"
              : "inActiveColor bar bar5"
          }
          onClick={() => dispatch({ type: "selected5" })}
          data-testid="bar5"
        ></div>
      </div>
    </>
  );
};

export default Bar;
