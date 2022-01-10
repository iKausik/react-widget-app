import React, { useReducer } from "react";

const initialState = [
  { id: 1, isSelected: false, name: "bar1" },

  { id: 2, isSelected: false, name: "bar2" },

  { id: 3, isSelected: false, name: "bar3" },

  { id: 4, isSelected: true, name: "bar4" },

  { id: 5, isSelected: true, name: "bar5" },
];

/*

it's a refactored version of the Bar.js component

but has some issue

it has some bugs in the reducer() function, 

when selecting/clicking on any bar, all bars disappear from the screen

need to be fixed

*/

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECTED":
      state &&
        state.map((element) => {
          //
          //
          if (element.isSelected === false) {
            if (element.id >= action.payload) {
              element.isSelected = true;
              return element.isSelected;
            } else {
              element.isSelected = false;
              return element.isSelected;
            }
          } else {
            element.isSelected = true;
            return element.isSelected;
          }
        });
      break;
    default:
      return state;
  }
};

const Bars = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="bars">
        {state &&
          state.map((element) => {
            return (
              <div
                key={element.id}
                className={
                  element.isSelected
                    ? `activeColor bar ${element.name}`
                    : `inActiveColor bar ${element.name}`
                }
                onClick={() =>
                  dispatch({ type: "SELECTED", payload: element.id })
                }
              ></div>
            );
          })}
      </div>
    </>
  );
};

export default Bars;
