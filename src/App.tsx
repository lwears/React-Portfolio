import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './global';
import theme from './theme';
import About from './views/about';
import Experience from './views/experience';
import Education from './views/education';
import { Burger, Menu } from './components/index';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  const menuId = 'main-menu';

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!node.current || node.current.contains(event.target as Element)) {
        return;
      }
      setOpen(false);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [node, open]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <BrowserRouter>
          <GlobalStyles />
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
          <div>
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/experience">
              <Experience />
            </Route>
            <Route exact path="/education">
              <Education />
            </Route>
          </div>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
