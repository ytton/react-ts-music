import routes from '@/router';
import React, { ReactNode, Suspense, memo } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

interface IProps {
  children?: ReactNode;
}

const Layout: React.FC<IProps> = () => {
  const location = useLocation();
  const navList = routes[0].children ?? [];
  const subList =
    routes[0].children?.find((x) => x.path === location.pathname.replace(/(?<=^\/\w+)\/.+/, ''))?.children ?? [];
  return (
    <>
      <nav className="flex justify-center align-middle bg-black-800 w-100 ">
        <div className="flex" style={{ width: '800px' }}>
          <span className="w-32 text-white">logo</span>
          {navList.map((x) => (
            <NavLink
              key={x.path}
              to={x.path ?? ''}
              className={({ isActive }) =>
                'text-white pt-6 pb-5 px-5 hover:bg-black relative  after:absolute after:bottom-0 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-b-red-700 after:left-1/2' +
                (isActive ? ' bg-black after:empty-content' : '')
              }
            >
              {x.meta?.title}
            </NavLink>
          ))}
        </div>
      </nav>
      <div className="flex justify-center py-1 bg-red-700 w-100">
        <div className="flex pl-36" style={{ width: '800px' }}>
          {subList.map((x) => (
            <NavLink
              key={x.path}
              to={x.path ?? ''}
              className={({ isActive }) =>
                'text-white hover:bg-black-200 my-0.5 mx-5 rounded-2xl py-1 px-2 text-xs' +
                (isActive ? ' bg-black-200' : '')
              }
            >
              {x.meta?.title}
            </NavLink>
          ))}
        </div>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default memo(Layout);
