import baseAdapter from 'adapters/Base';

const ProfileAdapter = () => {
  const fetchUser = authorizationHeader =>
    baseAdapter.get('me', {
      headers: authorizationHeader,
    });

  return {
    fetchUser,
  };
};

const profileAdapter = ProfileAdapter();

export default profileAdapter;
