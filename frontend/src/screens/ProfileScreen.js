import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Loader from '../components/Loader';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loader />;
  }

  return isAuthenticated ? (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  ) : (
    <div>You suck</div>
  );
};

export default withAuthenticationRequired(Profile, { onRedirecting: () => <Loader /> });
