import baseAdapter from 'adapters/Base';

const ProfileAdapter = () => {
  const fetchUser = authenticatedHeader =>
    baseAdapter.get('me', {
      headers: authenticatedHeader,
    });

  return {
    fetchUser,
  };
};

const profileAdapter = ProfileAdapter();

export default profileAdapter;
