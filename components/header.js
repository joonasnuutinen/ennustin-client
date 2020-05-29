import Link from "next/link";
import PropTypes from "prop-types";

function Header({ user, loading, dashboard = true }) {
  const dashboardStyles = dashboard ? " fixed bg-ennustin-gray" : "";
  return (
    <header
      className={
        "flex justify-center items-center w-full h-12 px-2 text-white" +
        dashboardStyles
      }
    >
      {!loading &&
        (dashboard && user ? (
          <>
            <div className="block lg:invisible mr-auto">
              <button className="flex items-center text-white focus:outline-none focus:shadow-outline">
                <svg
                  className="fill-current h-6 w-6"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <img className="h-6" src="/logo.svg" />
            <div className="w-6 ml-auto invisible" />
          </>
        ) : user ? (
          <Link href="/profile">
            <a className="ml-auto">Profiili</a>
          </Link>
        ) : (
          <a className="ml-auto" href="/api/login">
            Kirjaudu
          </a>
        ))}
    </header>
  );
}
Header.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool,
  dashboard: PropTypes.bool,
};

export default Header;
