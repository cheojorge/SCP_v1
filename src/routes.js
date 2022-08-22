import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
//
import Blog from './pages/Blog';
import NotFound from './pages/Page404';
import Pac from './pages/Pac';
import DashboardApp from './pages/DashboardApp';
import MisProcesos from './pages/MisProcesos';
import Login from './pages/Login';
import { RequireAuth } from './components/RequireAuth';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/sistema',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <RequireAuth><DashboardApp /></RequireAuth> },
        { path: 'MisProcesos', element:  <RequireAuth><MisProcesos /></RequireAuth> },
        { path: 'pac', element:  <RequireAuth><Pac /></RequireAuth> },
        { path: 'blog', element:  <RequireAuth><Blog /> </RequireAuth>},
      ],
    },
    {
      path: '/',
      children: [
        { path: '/', element: <Login /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
