import baseAdapter from 'adapters/Base';

const ProfileAdapter = () => {
  const fetchUser = () => baseAdapter.get('me');

  return {
    fetchUser,
  };
};

const profileAdapter = ProfileAdapter();

export default profileAdapter;
