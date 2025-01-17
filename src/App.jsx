import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboadPage from './pages/DashboadPage';
import { ExpenseProvider } from './context/ExpenseContext';

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: 'dashboad',
    element: <DashboadPage />,
  },
]);

export default function App() {
  return (
    <ExpenseProvider>
      <RouterProvider router={myRouter} />
    </ExpenseProvider>
  );
}
