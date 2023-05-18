import { ThemeProvider } from "@mui/material";
import { theme } from "@/config/theme/theme";
import { Provider } from "react-redux";
import { store } from "../redux/Store";
import Nav from "@/components/pages/Nav";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Nav />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
