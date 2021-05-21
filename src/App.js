import { Route, Switch } from 'react-router-dom';

import AllMeetUp from './pages/AllMeetUp';
import NewMeetUpPage from './pages/NewMeetUp';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layouts/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/new-meetup" component={NewMeetUpPage} />
        <Route path="/favorite" component={FavoritesPage} />
        <Route path="/" exact component={AllMeetUp} />
      </Switch>
    </Layout>
  );
}
export default App;
