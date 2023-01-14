import { RouteObject, useRoutes } from 'react-router-dom';
import routes from './router';

function App() {
  return useRoutes(routes as RouteObject[]);
}

export default App;
