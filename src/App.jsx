import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
