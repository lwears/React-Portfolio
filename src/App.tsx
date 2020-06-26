import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './global';
import theme from './theme';
import About from './views/about';
import Experience from './views/experience';
import NavBar from './components/navigation/Navbar';

const Container = styled.div`
  display: flex;
  flex-flow: row;
  background-color: gray;
  color: white;
  height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <BrowserRouter>
          <Container>
            <GlobalStyles />
            <NavBar />
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/experience">
              <Experience />
            </Route>
          </Container>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
