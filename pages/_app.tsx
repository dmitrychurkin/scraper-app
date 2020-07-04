import { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Component {...pageProps} />
);

export default CustomApp;
