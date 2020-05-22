import Head from "next/head";
import Header from "./header";

function Layout({ user, loading = false, children }) {
  return (
    <>
      <Head>
        <title>Next.js with Auth0</title>
      </Head>

      <Header user={user} loading={loading} />

      <div className="container flex flex-col justify-center items-center min-h-screen">
        {children}
      </div>
    </>
  );
}

export default Layout;
