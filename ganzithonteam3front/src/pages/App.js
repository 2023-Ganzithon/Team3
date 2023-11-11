import react from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import NavBar from '../styles/navBar';
import routes from '../routess';

function App() {
    <Router>
      <NavBar />


      <div className="container">
        <Switch>
          {routes.map((routes) => {
            return <Route key={routes.path} exact path={routes.path} component={routes.component}/>

          })}
        </Switch>
      </div>
</Router>
}

export default App;