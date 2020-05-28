import Head from "next/head";
import Header from "./header";
import PropTypes from "prop-types";

function Layout({ user, loading = false, dashboard = true, children }) {
  const dashboardStyles = dashboard ? " pt-12" : "";

  return (
    <>
      <Head>
        <title>Next.js with Auth0</title>
      </Head>

      <Header user={user} loading={loading} dashboard={dashboard} />

      <div
        className={
          "flex flex-col justify-center items-center min-h-screen" +
          dashboardStyles
        }
      >
        {children}
      </div>
    </>
  );
}
Layout.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  dashboard: PropTypes.bool,
  children: PropTypes.node,
};

export default Layout;
