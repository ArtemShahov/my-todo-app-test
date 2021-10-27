import * as React from "react";
import { connect } from "react-redux";
import selectors from "./components/ThemeToggler/selectors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ThemeToggler from "./components/ThemeToggler/ThemeToggler";
import Box from '@mui/material/Box'

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
      <ThemeToggler />
      <Box sx={{
        bgcolor: 'background.default',
      }}>
        jhkj
      </Box>
    </ThemeProvider>
  );
}

const mapStateToProps = (state: object) => ({
  mode: selectors.isDarkMode(state),
});

export default connect(mapStateToProps)(App);
