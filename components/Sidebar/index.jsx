import Link from 'next/link';
import PropTypes from 'prop-types';

import useUser from 'hooks/useUser';
import { clearToken } from 'helpers/authentication';

export const sidebarTestIds = {
  base: 'sidebar',
  userName: 'sidebar__user-name',
  button: 'sidebar__logout-button',
};

const Sidebar = ({ headerRef, name }) => {
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
      ref={headerRef}
      className="fixed w-[164px] md:w-[174px] lg:w-[264px] h-full bg-sidebar backdrop-blur-4xl right-0 pl-8 pt-8 pr-8"
      data-test-id={sidebarTestIds.base}
    >
      <div className="text-white text-base-xxl font-extrabold h-9 pt-2 mb-5" data-test-id={sidebarTestIds.userName}>
        {name}
      </div>
      <hr className="border-solid rounded-[0.5px] border-white/20 mb-5" />
      <div className="h-14 flex items-center text-white/50 text-base-xl">
        <Link href="/login">
          <a onClick={handleOnClick} data-test-id={sidebarTestIds.button}>
            Logout
          </a>
        </Link>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  headerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.object })]),
  name: PropTypes.string.isRequired,
};

export default Sidebar;
