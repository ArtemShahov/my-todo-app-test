import * as React from "react";
import { connect } from "react-redux";
import selectors from "./components/ThemeToggler/selectors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Header from './components/base/Header';
import Main from "./components/base/Main";
import './App.scss';

function App(props: any) {
  const { mode } = props;
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode ? "dark" : "light",
        },
      }),
    [mode]
  );
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.default",
          color: 'text.primary',
          width: "100vw",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Main />
      </Box>
    </ThemeProvider>
  );
}

const mapStateToProps = (state: object) => ({
  mode: selectors.isDarkMode(state),
});

export default connect(mapStateToProps)(App);
