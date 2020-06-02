import NavItem from "./navItem";
import PropTypes from "prop-types";

function Navigation({ toggled = true }) {
  const visibility = toggled ? "" : " hidden sm:flex";
  return (
    <nav
      className={
        "fixed flex flex-col h-screen pt-16 pl-4 w-40 bg-ennustin-gray-lighter text-white" +
        visibility
      }
    >
      <ul>
        <NavItem href="/api/logout" text="Kirjaudu ulos" link={false} />
      </ul>
    </nav>
  );
}
Navigation.propTypes = {
  toggled: PropTypes.bool,
};

export default Navigation;
