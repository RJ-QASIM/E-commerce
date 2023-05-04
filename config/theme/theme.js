import { createTheme } from "@mui/material";
import { colors, breakpoints } from "./themeHelper";

export const theme = createTheme({
  //* customize mui font family
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },

  //* customize mui components color
  palette: {
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
    },
    // secondary: {
    //   main: colors.secondary.main,
    //   light: colors.secondary.light,
    //   dark: colors.secondary.dark,
    // },
    // info: {
    //   main: colors.info.main,
    //   light: colors.info.light,
    //   dark: colors.info.dark,
    // },
  },
  textColor: {
    dark: colors.textColor.dark,
    lightDark: colors.textColor.lightDark,
    light: colors.textColor.light,
    lightest: colors.textColor.lightest,
  },

  //* customize mui components border-radius
  shape: {
    borderRadius: 8,
  },

  //* customize mui breakpoints
  breakpoints: {
    values: {
      xs: breakpoints.values.xs,
      sm: breakpoints.values.sm,
      md: breakpoints.values.md,
      lg: breakpoints.values.lg,
      xl: breakpoints.values.xl,
      xxl: breakpoints.values.xxl,
    },
  },

  //* customize mui components
  components: {
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          height: "30px",
        },
        sizeMedium: {
          height: "36px",
        },
        sizeLarge: {
          height: "42px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: colors.textColor.lightDark,
        },
      },
    },
    // MuiAutocomplete: {
    //   styleOverrides: {
    //     root: {
    //       padding: 0,
    //     },
    //   },
    // },
    // MuiSvgIcon: {
    //   styleOverrides: {
    //     root: {
    //       color: colors.iconColor.main,
    //     },
    //   },
    // },
  },
});
