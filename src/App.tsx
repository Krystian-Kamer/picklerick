import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  Characters,
  SingleCharacter,
  Locations,
  Episodes,
  HomeLayout,
  Error,
  Landing,
  Login,
  Register,
  Library,
} from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store';

import { loader as characterLoader } from './pages/Characters';
import { loader as locationsLoader } from './pages/Locations';
import { loader as episodesLoader } from './pages/Episodes';
import { loader as landingLoader } from './pages/Landing';
import { loader as singleCharacterLoader } from './pages/SingleCharacter';
import { loader as libraryLoader } from './pages/Library';
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
      },
      {
        path: 'characters',
        element: <Characters />,
        loader: characterLoader,
      },
      {
        path: 'characters/:id',
        element: <SingleCharacter />,
        loader: singleCharacterLoader(queryClient),
      },
      {
        path: 'locations',
        element: <Locations />,
        loader: locationsLoader(queryClient),
      },
      {
        path: 'episodes',
        element: <Episodes />,
        loader: episodesLoader(queryClient),
      },
      {
        path: 'library',
        element: <Library />,
        loader: libraryLoader(store),
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer position='top-center' autoClose={3000} />
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
