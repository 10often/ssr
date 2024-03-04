import { Menu } from '../menu';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <Menu />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
