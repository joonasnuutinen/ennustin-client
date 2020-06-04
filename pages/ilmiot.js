import { useFetchUser } from "../lib/user";
import Layout from "../components/layout";
import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

function PhenomenonForm() {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("test-1");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nimi: ${name}, Omistaja: ${owner}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4">
        <label htmlFor="name">Nimi</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </p>
      <p className="mb-4">
        <label htmlFor="owner">Omistaja</label>
        <select
          id="owner"
          name="owner"
          value={owner}
          onChange={(event) => setOwner(event.target.value)}
        >
          <option value="test-1">Test 1</option>
          <option value="test-2">Test 2</option>
          <option value="test-3">Test 3</option>
        </select>
      </p>
      <p className="my-4">
        <button type="submit">Lisää</button>
      </p>
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
        <PhenomenonForm />
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
