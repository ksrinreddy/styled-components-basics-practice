import { styled } from "styled-components";

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
