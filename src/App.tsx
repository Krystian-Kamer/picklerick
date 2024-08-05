import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  Characters,
  SingleCharacter,
  SingleEpisode,
  SingleLocation,
  Locations,
  Episodes,
  HomeLayout,
  Error,
  Landing,
} from './pages';

import { loader as charactersLoader } from './pages/Characters';
import { loader as locationsLoader } from './pages/Locations';
import { loader as episodesLoader } from './pages/Episodes';
import { loader as landingLoader } from './pages/Landing';

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
      { path: 'characters', element: <Characters />, loader: charactersLoader },
      { path: 'characters/:id', element: <SingleCharacter /> },
      { path: 'locations', element: <Locations />, loader: locationsLoader },
      { path: 'locations/:id', element: <SingleLocation /> },
      { path: 'episodes', element: <Episodes />, loader: episodesLoader },
      { path: 'episodes/:id', element: <SingleEpisode /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
