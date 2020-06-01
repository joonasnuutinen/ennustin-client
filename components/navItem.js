import Link from "next/link";
import PropTypes from "prop-types";

function NavItem({ href, text, link = true }) {
  return (
    <li className="mb-4">
      {link ? (
        <Link href={href}>
          <a>{text}</a>
        </Link>
      ) : (
        <a href={href}>{text}</a>
      )}
    </li>
  );
}
NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.bool,
};

export default NavItem;
