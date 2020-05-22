import Link from "next/link";

function Header({ user, loading }) {
  return (
    <header>
      <nav>
        <ul>
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
              <li>
                <a href="/api/login">Kirjaudu</a>
              </li>
            ))}
        </ul>
      </nav>

      <style jsx>{`
        header {
          padding: 0.2rem;
          color: #fff;
        }
        nav {
          max-width: 42rem;
          margin: 1.5rem auto;
        }
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }
        li {
          margin-right: 1rem;
        }
        li:last-child {
          margin-left: auto;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        button {
          font-size: 1rem;
          color: #fff;
          cursor: pointer;
          border: none;
          background: none;
        }
      `}</style>
    </header>
  );
}

export default Header;
