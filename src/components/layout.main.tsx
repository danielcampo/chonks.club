import Head from 'next/head';
import Script from 'next/script';
import type { ReactElement } from 'react';

import styles from '../styles/layout.module.css';

type PageLayout = {
  children: ReactElement;
};

const Layout = ({ children }: PageLayout) => {
  return (
    <>
      <Head>
        <title>CHONK</title>
        <meta name="description" content="Chonk NFT are coming soon!" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#fa3536" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VTNCWN01LF"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
      
          gtag('config', 'G-VTNCWN01LF');
        `}
      </Script>
      <div className={styles.main}>{children}</div>
    </>
  );
};

export default Layout;
