import Head from "next/head";
import Header from "./header";
import Navigation from "./navigation";
import PropTypes from "prop-types";
import { useState } from "react";

function Layout({ user, loading = false, dashboard = true, children }) {
  const [navToggled, setNavToggled] = useState(false);
  const dashboardStyles = dashboard ? " pt-12" : "";

  return (
    <>
      <Head>
        <title>Next.js with Auth0</title>
      </Head>

      <Header
        user={user}
        loading={loading}
        dashboard={dashboard}
        navToggled={navToggled}
        setNavToggled={setNavToggled}
      />

      {!loading && dashboard && user && <Navigation toggled={navToggled} />}

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
