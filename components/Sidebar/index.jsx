import Link from 'next/link';
import PropTypes from 'prop-types';

import useUser from 'hooks/useUser';
import { clearToken } from 'helpers/authentication';

export const sidebarTestIds = {
  base: 'sidebar',
  userName: 'sidebar__user-name',
  button: 'sidebar__logout-button',
};

const Sidebar = ({ name }) => {
  const { mutateUser } = useUser({
    redirectTo: '/login',
  });

  const handleOnClick = async event => {
    event.preventDefault();
    clearToken();
    mutateUser();
  };

  return (
    <div
      className="fixed bg-sidebar backdrop-blur-4xl right-0 w-[264px] pl-8 pt-8 pr-8 h-full"
      data-test-id={sidebarTestIds.base}
    >
      <div className="text-white text-base-xxl font-extrabold mb-[22px]" data-test-id={sidebarTestIds.userName}>
        {name}
      </div>
      <hr className="border-solid rounded-[0.5px] border-white/20 mb-[35px]" />
      <Link href="/logout">
        <a className="text-white/50 text-base-xl" onClick={handleOnClick} data-test-id={sidebarTestIds.button}>
          Logout
        </a>
      </Link>
    </div>
  );
};

Sidebar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Sidebar;
