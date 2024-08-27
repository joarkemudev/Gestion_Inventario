import React from 'reat';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import RegistrarInventario from './components/RegistrarInventario';
import EntregarInventario from './components/EntregarInventario';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <Li>
              <Link to="/registrar">Registrar Inventario</Link>
            </Li>
            <Li>
              <Link to="/entregar">Entregar Inventario</Link>
            </Li>
          </ul>
        </nav>

        <Switch>
          <Route path="/registrar">
            <RegistrarInventario />
          </Route>
          <Route path="/entregar">
            <EntregarInventario />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
