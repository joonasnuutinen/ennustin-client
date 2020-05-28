import Head from "next/head";
import Header from "./header";
import PropTypes from "prop-types";

function Layout({ user, loading = false, dashboard = true, children }) {
  return (
    <>
      <Head>
        <title>Next.js with Auth0</title>
      </Head>

      <Header user={user} loading={loading} transparent={!dashboard} />

      <div className="flex flex-col justify-center items-center min-h-screen">
        {children}
      </div>
    </>
  );
}
Layout.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  dashboard: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default Layout;
