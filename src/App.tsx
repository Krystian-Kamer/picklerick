import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  Characters,
  SingleCharacter,
  SingleEpisode,
  Locations,
  Episodes,
  HomeLayout,
  Error,
  Landing,
} from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { loader as charactersLoader } from './pages/Characters';
import { loader as locationsLoader } from './pages/Locations';
import { loader as episodesLoader } from './pages/Episodes';
import { loader as landingLoader } from './pages/Landing';
import { loader as singleCharacterLoader } from './pages/SingleCharacter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        loader: charactersLoader(queryClient),
      },
      {
        path: 'characters/:id',
        element: <SingleCharacter />,
        loader: singleCharacterLoader,
      },
      {
        path: 'locations',
        element: <Locations />,
        loader: locationsLoader(queryClient),
      },
      { path: 'episodes', element: <Episodes />, loader: episodesLoader },
      { path: 'episodes/:id', element: <SingleEpisode /> },
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
