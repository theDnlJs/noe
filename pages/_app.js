import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Head from "next/head";
import { Provider } from "react-redux";


import { ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "../src/theme";

import store from "../src/store";


import Appbar from "../components/Appbar";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });



// Custom App to wrap it with context provider
export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
    return (
        <Provider store={store}>
          <Head>
            <title>MAINSTREAM</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={theme}>
            <StylesProvider jss={jss}>
              <CssBaseline />
              <Container style={{ margin: "0", padding: "0" }} maxWidth="md">
                <Appbar />
                  <Component {...pageProps} />
              </Container>
            </StylesProvider>
          </ThemeProvider>
        </Provider>
    );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
