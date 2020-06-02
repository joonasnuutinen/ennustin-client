import NavItem from "./navItem";
import PropTypes from "prop-types";
import Link from "next/link";

function Navigation({ user, toggled = true }) {
  const visibility = toggled ? "" : " hidden sm:flex";
  return (
    <nav
      className={
        "flex flex-col fixed h-screen pt-16 pl-4 w-40 bg-ennustin-gray-lighter text-white" +
        visibility
      }
    >
      <ul className="flex flex-col">
        <NavItem href="/profiili" text="Profiili" />
        <NavItem href="/api/logout" text="Kirjaudu ulos" link={false} />
      </ul>
      {user.isAdmin() && (
        <Link href="/ilmiot" className="mt-auto mb-4">
          <a className="mt-auto mb-4">Uusi ilmiö</a>
        </Link>
      )}
    </nav>
  );
}
Navigation.propTypes = {
  user: PropTypes.object,
  toggled: PropTypes.bool,
};

export default Navigation;
