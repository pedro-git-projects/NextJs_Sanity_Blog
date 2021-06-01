import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.scss';
import 'highlight.js/styles/dracula.css';
import ThemeProvider from 'providers/ThemeProvider';

import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faSun,
  faMoon,
  faBorderAll,
  faList,
  faSortNumericDown,
  faSortNumericUp } from '@fortawesome/free-solid-svg-icons';


config.autoAddCss = false;
library.add(
  faSun,
  faMoon,
  faList,
  faBorderAll,
  faSortNumericDown,
  faSortNumericUp);

import '@fortawesome/fontawesome-svg-core/styles.css';
import "react-toggle/style.css"

export default ({Component, pageProps}) =>
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
