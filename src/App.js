// you dont need any css files to use styled components, even if there are any exist, it won't affect styled components styles.

import "./App.css";
// import styled from "styled-components";
import StyledButton, { FancyButton } from "./components/Button/Button";

// const StyledButton = styled.button`
//   background: blue;
//   border: 0.1rem solid blue;
//   color: #fff;
//   display: inline-block;
//   padding: 0.5rem 1rem;
//   cursor: pointer;
//   transition: all 300ms ease-out;
// `;

function App() {
  return (
    <div className="App">
      {/* <button>Button</button> */}
      <StyledButton>Styled button</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant="outline">Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <FancyButton as="a">Fancy Button</FancyButton>
    </div>
  );
}

export default App;
