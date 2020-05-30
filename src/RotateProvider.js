import React, { useState } from "react";

// context variable
const { Provider, Consumer } = React.createContext();

const RotateProvider = props => {
  //inital position passed to App.js
  const [scrollPosition, setScrollPosition] = useState(0);

  document.addEventListener("scroll", () => {
    // console.log(window.scrollY);

    //Set the postion of imgs rotation
    setScrollPosition(window.scrollY);
  });

  return (
    <Provider
      value={{
        scrollPosition
      }}
    >
      {props.children}
    </Provider>
  );
};

//passes value of the scroll positon
export const withRotate = C => props => (
  //consumer value passes everything to withRotate and become child to the function
  <Consumer>{value => <C {...value} {...props} />}</Consumer>
);

export default RotateProvider;
