// you dont need any css files to use styled components, even if there are any exist, it won't affect styled components styles.
import logo from "./logo.svg";
import "./App.css";
// import styled from "styled-components";
import StyledButton, {
  FancyButton,
  SubmitButton,
} from "./components/Button/Button";
import { AnimatedLogo, DarkButton } from "./components/Button/Button.styles";
import { createGlobalStyle, ThemeProvider } from "styled-components";

// const StyledButton = styled.button`
//   background: blue;
//   border: 0.1rem solid blue;
//   color: #fff;
//   display: inline-block;
//   padding: 0.5rem 1rem;
//   cursor: pointer;
//   transition: all 300ms ease-out;
// `;

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
  fontFamily: "Segoe UI",
};

// global styels
export const GlobalStyles = createGlobalStyle`
button {
  /* font-family: Georgia, 'Times New Roman', Times, serif; */
  font-family: ${(props) => props.theme.fontFamily};
}
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        {/* <img src={logo} className='App-logo' alt="logo" /> */}
        <AnimatedLogo src={logo} />
        {/* <button>Button</button> */}
        {/* passing attributes (ex. type) - not a recommended way (following one) */}
        <StyledButton type="submit">Styled button</StyledButton>
        <div>
          <br />
        </div>
        <StyledButton variant="outline">Styled Button</StyledButton>
        <div>
          <br />
        </div>
        <FancyButton as="a">Fancy Button</FancyButton>
        <div>
          <br />
        </div>
        <SubmitButton>Submit Button</SubmitButton>
        <div>
          <br />
        </div>
        <DarkButton>Dark Button</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
