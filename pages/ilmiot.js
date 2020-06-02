import { useFetchUser } from "../lib/user";
import Layout from "../components/layout";
//import PropTypes from "prop-types";
import Head from "next/head";

function Phenomena() {
  const { user, loading } = useFetchUser({ required: true });

  return (
    <>
      <Head>
        <title>Ilmiöt</title>
      </Head>

      <Layout user={user} loading={loading}>
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
      </Layout>
    </>
  );
}

export default Phenomena;
