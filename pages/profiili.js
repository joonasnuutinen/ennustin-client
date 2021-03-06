// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchUser } from "../lib/user";
import Layout from "../components/layout";
import PropTypes from "prop-types";
import Head from "next/head";

function ProfileCard({ user }) {
  return (
    <>
      <h1>Profiili</h1>

      <div>
        <p>{user.name}</p>
        {user.isAdmin() && (
          <>
            <p>Admin</p>
          </>
        )}
      </div>
    </>
  );
}
ProfileCard.propTypes = {
  user: PropTypes.object,
};

function Profile() {
  const { user, loading } = useFetchUser({ required: true });

  return (
    <>
      <Head>
        <title>Profiili</title>
      </Head>
      <Layout user={user} loading={loading}>
        {loading ? <>Ladataan...</> : <ProfileCard user={user} />}
      </Layout>
    </>
  );
}

export default Profile;
