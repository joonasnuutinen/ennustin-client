import Head from "next/head";
import Header from "./header";
import Navigation from "./navigation";
import PropTypes from "prop-types";
import { useState } from "react";

function Layout({ user, loading = false, dashboard = true, children }) {
  const [navToggled, setNavToggled] = useState(false);
  const dashboardStyles = dashboard
    ? " pt-16 sm:ml-40 px-2 bg-white"
    : " flex flex-col";

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Header
        user={user}
        loading={loading}
        dashboard={dashboard}
        navToggled={navToggled}
        setNavToggled={setNavToggled}
      />

      {!loading && dashboard && user && (
        <Navigation user={user} toggled={navToggled} />
      )}

      <div className={"min-h-screen" + dashboardStyles}>{children}</div>
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
