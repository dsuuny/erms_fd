import Layout from '../pages/layout';
import Dashboard from '../pages/Dashboard/index';
import AllSpecifications from '../pages/AllSpecifications';
import MySpecifications from '../pages/MySpecifications';
import Published from '../pages/Published';
import PendingReview from '../pages/PendingReview';
import ChangeDetail from '../pages/ChangeDetail';
import type { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'all-specifications',
        element: <AllSpecifications />,
      },
      {
        path: 'my-specifications',
        element: <MySpecifications />,
      },
      {
        path: 'published',
        element: <Published />,
      },
      {
        path: 'pending-review',
        element: <PendingReview />,
      },
      {
        path: 'change-detail/:id',
        element: <ChangeDetail />,
      },
    ],
  },
];

export default routes;
