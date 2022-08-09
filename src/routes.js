import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
//
import Blog from './pages/Blog';
import NotFound from './pages/Page404';
import Pac from './pages/Pac';
import DashboardApp from './pages/DashboardApp';
import MisProcesos from './pages/MisProcesos';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'MisProcesos', element: <MisProcesos /> },
        { path: 'pac', element: <Pac /> },
        { path: 'blog', element: <Blog /> },
      ],
    },
    {
      path: '/',
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
