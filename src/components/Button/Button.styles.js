import { keyframes, styled } from "styled-components";

export const StyledButton = styled.button`
  border: 0.1rem solid blue;
  /* background: blue; */
  background-color: ${(props) =>
    props.variant === "outline" ? "#fff" : "blue"};
  /* color: #fff; */
  color: ${(props) => (props.variant === "outline" ? "blue" : "#fff")};
  display: inline-block;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 300ms ease-out;

  /* pseudo classes */
  &:hover {
    /* inverting properties on hover */
    background-color: ${(props) =>
      props.variant !== "outline" ? "#fff" : "blue"};
    color: ${(props) => (props.variant !== "outline" ? "blue" : "#fff")};
  }
`;

// extneding styles - passing another styled-component
export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f3d635 0%, #fda085 100%);
  border: none;
`;

// passed props and adding attributes
// you can also pass props function instead of an object like here(if needed) into attributes constructor.

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  box-shadow: 0 9px #999;
  &:active {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#fff" : "blue"};
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

// animations
const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;
export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 20s linear;
`;
