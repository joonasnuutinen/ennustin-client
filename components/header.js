import Link from "next/link";

function Header({ user, loading }) {
  return (
    <header className="px-2 text-white">
      <nav className="my-6">
        <ul className="flex ml-0 pl-0 list-none">
          {!loading &&
            (user ? (
              <>
                <li>
                  <Link href="/profile">
                    <a>Profiili</a>
                  </Link>
                </li>
                <li>
                  <a href="/api/logout">Kirjaudu ulos</a>
                </li>
              </>
            ) : (
              <li className="ml-auto">
                <a href="/api/login">Kirjaudu</a>
              </li>
            ))}
        </ul>
      </nav>

      <style jsx>{`
        li {
          margin-right: 1rem;
        }
      `}</style>
    </header>
  );
}

export default Header;
