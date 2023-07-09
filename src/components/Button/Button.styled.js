import { styled } from "styled-components";

export const StyledButton = styled.button`
  border: 0.1rem solid blue;
  /* background: blue; */
  background: ${(props) => (props.variant === "outline" ? "#fff" : "blue")};
  /* color: #fff; */
  color: ${(props) => (props.variant === "outline" ? "blue" : "#fff")};
  display: inline-block;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 300ms ease-out;
`;
