import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  public render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="google" content="notranslate" />
          <meta name="theme-color" content="#131524" />
          <meta name="description" content="Mouse Haunt" />
          <meta
            name="title"
            content="Mouse Haunt - New NFT Game Play to Earn"
          />
          <meta
            name="description"
            content="Mouse Haunt is a Skill Based NFT Game, Play to Earn, in Binance Smart Chain. Earn money playing. "
          />
          <meta
            name="keywords"
            content="Mouse Haunt, Game Play to Earn, New Game Coin, Binance Smart Chain, Game Binance Smart Chain, NFT Game Play to Earn, Skill Based NFT Game, Original Blockchain Game"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://mousehaunt.com/" />
          <meta
            property="og:title"
            content="Mouse Haunt - New NFT Game Play to Earn"
          />
          <meta
            property="og:description"
            content="Mouse Haunt is a Skill Based NFT Game, Play to Earn, in Binance Smart Chain. Earn money playing."
          />
          <meta
            property="og:image"
            content="https://mousehaunt.com/images/logo.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://mousehaunt.com/" />
          <meta
            property="twitter:title"
            content="Mouse Haunt - New NFT Game Play to Earn"
          />
          <meta
            property="twitter:description"
            content="Mouse Haunt is a Skill Based NFT Game, Play to Earn, in Binance Smart Chain. Earn money playing."
          />
          <meta
            property="twitter:image"
            content="https://mousehaunt.com/images/logo.png"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preload" href="/images/game-related/fireplace.webp" as="image" />
          <link
            rel="preload"
            href="https://assets.mousehaunt.com/videos/LandingPage.mp4"
            as="video"
          />
          <link
            rel="preload"
            href="/images/phone-frames/iphone-600.png"
            as="image"
            media="(min-width: 601px)"
          />
          <link
            rel="preload"
            href="/fonts/bebas-neue-pro/Bebas Neue Pro Bold.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/bebas-neue-pro/Bebas Neue Pro Regular.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/sf-pro-display/SFPRODISPLAYREGULAR.OTF"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/images/phone-frames/iphone-320.png"
            as="image"
            media="(max-width: 600px)"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
          />
          {/* eslint-disable-next-line @next/next/next-script-for-ga */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',${process.env.GTM_ID});`,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
            }}
          />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
