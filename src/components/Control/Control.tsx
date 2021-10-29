import React from "react";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./styles.scss";

function Control() {
  return (
    <div className="control">
      <div className="control__search-input">
        <TextField
          sx={{
            width: "100%"
          }}
          size="small"
          label="Search"
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </div>
      <div className="control__buttons-wrapper">
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button>New category</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      <ThemeToggler />
    </div>
  );
}

export default Control;
