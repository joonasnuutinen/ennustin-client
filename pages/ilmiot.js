import { useFetchUser } from "../lib/user";
import Layout from "../components/layout";
import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

function PhenomenaForm() {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("test-1");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nimi: ${name}, Omistaja: ${owner}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nimi
        <input
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Omistaja
        <select
          value={owner}
          onChange={(event) => setOwner(event.target.value)}
        >
          <option value="test-1">Test 1</option>
          <option value="test-2">Test 2</option>
          <option value="test-3">Test 3</option>
        </select>
      </label>
      <input type="submit" value="Tallenna"></input>
    </form>
  );
}

function PhenomenaContent({ user }) {
  return user.isAdmin() ? (
    <>
      <Head>
        <title>Ilmiöt</title>
      </Head>

      <main>
        <h1>Ilmiöt</h1>
        <PhenomenaForm />
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
