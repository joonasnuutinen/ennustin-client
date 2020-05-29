import NavItem from "./navItem";
import PropTypes from "prop-types";

function Navigation({ toggled = true }) {
  const visibility = toggled ? "" : " hidden";
  return (
    <nav
      className={
        "fixed flex flex-col min-w-1/2 h-screen pt-16 px-4 bg-ennustin-gray-lighter text-white" +
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
