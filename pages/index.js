import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ennustin</title>
        <link rel="apple-touch-icon" sizes="57x57" href="/icon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/icon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
        <link rel="manifest" href="/icon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/icon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <img
          className="front-logo"
          alt="Ennustin"
          src="/ennustin.svg"
        />

        <p className="description">
          Pilvipohjainen työkalu asioiden ennustamiseen
        </p>

        <p>
          Lisätietoja: <a href="mailto:info@autua.fi">info@autua.fi</a>
        </p>
      </main>

      <footer>
        Palvelun tarjoaa{' '}
        <a
          href="https://autua.fi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/autua.svg" alt="Autua" className="inline-logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          width: 100%;
          padding-top: 5rem;
          padding-bottom: 5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #333;
          background: linear-gradient(45deg, #222 0%, #444 100%);
          font-weight: 300;
        }

        main,
        footer {
          padding-left: .5rem;
          padding-right: .5rem;
        }

        main,
        main a {
          color: #dee8fc;
        }

        main a {
          font-weight: 400;
        }

        footer {
          width: 100%;
          height: 60px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        .front-logo {
          width: 100%;
          max-width: 400px;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          padding: 1rem 0;
          font-size: 1.5rem;
        }

        .inline-logo {
          height: 1em;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Source Sans Pro', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
