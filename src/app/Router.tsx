import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout.tsx';
import './app.css';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Main page</div>} />
        <Route path="/news" element={<div>News page</div>} />
        <Route path="/about" element={<div>About page</div>} />
      </Route>
    </Routes>
  );
}

export default Router;
