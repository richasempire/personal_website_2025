import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=cyrillic"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="css/basic.css" />
        <link rel="stylesheet" href="css/layout.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/animate.css" />
        <link rel="stylesheet" href="css/jarallax.css" />
        <link rel="stylesheet" href="css/swiper.css" />
        <link rel="stylesheet" href="css/fontawesome.css" />
        <link rel="stylesheet" href="css/brands.css" />
        <link rel="stylesheet" href="css/solid.css" />
        <link rel="shortcut icon" href="images/favicons/favicon2.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
