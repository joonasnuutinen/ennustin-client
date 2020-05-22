import { useFetchUser } from "../lib/user";
import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <Head>
        <title>Ennustin</title>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/icon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/icon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/icon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/icon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icon/favicon-16x16.png"
        />
        <link rel="manifest" href="/icon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/icon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex flex-col flex-1 justify-center items-center w-full pb-20 px-2 font-light">
        <img className="w-full max-w-sm" alt="Ennustin" src="/ennustin.svg" />

        <p className="py-8 text-center text-2xl">
          Pilvipohjainen työkalu asioiden ennustamiseen
        </p>

        <p>
          Lisätietoja:{" "}
          <a className="font-normal" href="mailto:info@autua.fi">
            info@autua.fi
          </a>
        </p>
      </main>

      <footer className="flex justify-center items-center h-16 w-full px-2 bg-white">
        Palvelun tarjoaa{" "}
        <a href="https://autua.fi" target="_blank" rel="noopener noreferrer">
          <img src="/autua.svg" alt="Autua" className="ml-2 h-4" />
        </a>
      </footer>

      <style jsx>{`
        main,
        main a {
          color: #dee8fc;
        }
      `}</style>
    </Layout>
  );
}
