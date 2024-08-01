// import picklerick from './assets/picklerick.png'

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

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      { path: 'characters', element: <Characters /> },
      { path: 'characters/:id', element: <SingleCharacter /> },
      { path: 'locations', element: <Locations /> },
      { path: 'locations/:id', element: <SingleLocation /> },
      { path: 'episodes', element: <Episodes /> },
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
