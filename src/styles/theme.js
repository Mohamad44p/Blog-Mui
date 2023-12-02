import { createTheme } from "@mui/material/styles";
import * as colors from "@mui/material/colors";

const theme = createTheme({
  palette: {
    textColor: {
      title: colors.grey[500],
      mainText: colors.grey[900],
    },
    textstyle: {
      title: {
        fontSize: "1.3rem",
        fontWeight: "bold",
        paddingTop: "0.3rem",
        paddingLeft: "0.1rem",
      },
    },
  },

  texyField: {
    Field1: {
      label: "Note Title",
      color: "secondary",
      fullWidth: true,
      required: true,
      variant: "outlined",
    },
    styleField: {
      marginTop: 2,
      marginBottom: 2,
      display: "block",
    },
    Field2: {
      label: "Details",
      color: "secondary",
      rows: 4,
      multiline: true,
      fullWidth: true,
      required: true,
      variant: "outlined",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
