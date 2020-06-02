import { useFetchUser } from "../lib/user";
import Layout from "../components/layout";
import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";

function PhenomenaContent({ user }) {
  return user.isAdmin() ? (
    <>
      <Head>
        <title>Ilmiöt</title>
      </Head>

      <main>
        <h1>Ilmiöt</h1>
        <form>
          <label>
            Nimi
            <input type="text" />
          </label>
          <label>
            Käyttäjä
            <select>
              <option>Test 1</option>
              <option>Test 2</option>
              <option>Test 3</option>
            </select>
          </label>
        </form>
      </main>
    </>
  ) : (
    <>
      <Head>
        <title>Pääsy kielletty</title>
      </Head>
      <main>
        <h1>Pääsy kielletty</h1>
        <p>
          <Link href="/profiili">
            <a className="text-blue-600">Siirry profiiliin</a>
          </Link>
        </p>
      </main>
    </>
  );
}
PhenomenaContent.propTypes = {
  user: PropTypes.object,
};

function Phenomena() {
  const { user, loading } = useFetchUser({ required: true });

  return (
    <>
      <Head>
        <title>Ladataan...</title>
      </Head>

      <Layout user={user} loading={loading}>
        {loading ? <>Ladataan...</> : <PhenomenaContent user={user} />}
      </Layout>
    </>
  );
}

export default Phenomena;
