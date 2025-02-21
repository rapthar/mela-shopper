import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import AuthPage from './components/Auth/AuthPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout isAdmin={false} />,
  },
  {
    path: '/admin',
    element: <DashboardLayout isAdmin={true} />,
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
]);