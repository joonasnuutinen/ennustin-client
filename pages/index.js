import { useFetchUser } from "../lib/user";
import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading} dashboard={false}>
      <Head>
        <title>Ennustin</title>
      </Head>

      <main className="flex flex-col flex-1 justify-center items-center w-full py-20 px-2 font-light">
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
