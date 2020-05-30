import React from "react";
import "./styles.css";

//Gives the scroll position the value will be 0
import { withRotate } from "./RotateProvider";
import styled from "styled-components";
import penguin from "./penguin.png";

function App(props) {
  console.log(props);
  return (
    <Container>
      <img id="penguin-img" src={penguin} />
    </Container>
  );
}

//CSS access to state logoic
const Container = withRotate(styled.div`
  /* sets scroll bar height */
  height: 600vh;

  #penguin-img {
    /* prevents window from scrollin img out of view */
    position: fixed;
    height: 300px;
    width: 300px;

    //connects num of degrees to the scrollY
    //number of degress passed initated by the event listener
    transform: rotate(${props => props.scrollPosition}deg);
  }
`);

// completes the connection to see the scroll postion's key pair values
// inital state returns as 0

export default withRotate(App);
