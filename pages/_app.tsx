import type { AppProps } from "next/app";
import Script from "next/script";
import { CookieNotice } from "../components/cookie-notice";
import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7H84EBCL3H"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7H84EBCL3H');
        `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <CookieNotice></CookieNotice>
    </>
  );
}

export default MyApp;
