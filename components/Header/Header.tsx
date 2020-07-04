import Head from 'next/head';
import { memo } from 'react';

type Props = {
  readonly title: string;
};

const Header = ({ title }: Props): JSX.Element => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

Header.defaultProps = {
  title: 'Next.JS SSR',
};

export default memo(Header);
