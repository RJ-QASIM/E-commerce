import { ThemeProvider } from "@mui/material";
import { theme } from "@/config/theme/theme";
import { Provider } from "react-redux";
import { store } from "../redux/Store";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
