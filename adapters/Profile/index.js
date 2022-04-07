import baseAdapter from 'adapters/Base';

const ProfileAdapter = () => {
  const fetchUser = token =>
    baseAdapter.get('me', {
      headers: {
        Authorization: token,
      },
    });

  return {
    fetchUser,
  };
};

const profileAdapter = ProfileAdapter();

export default profileAdapter;
