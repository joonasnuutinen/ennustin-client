import Head from "next/head";
import Header from "./header";

function Layout({ user, loading = false, children }) {
  return (
    <>
      <Head>
        <title>Next.js with Auth0</title>
      </Head>

      <Header user={user} loading={loading} />

      <div className="container">{children}</div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Source Sans Pro", sans-serif;
        }

        body {
          background: #333;
          background: linear-gradient(45deg, #222 0%, #444 100%);
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

export default Layout;
