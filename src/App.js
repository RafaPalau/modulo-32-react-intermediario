import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TemplateDefault from "./templates/Default";
import TemplatePage from "./templates/Page";

import CustomersList from "./pages/customers/List";
import CustomersRegister from "./pages/customers/Register";
import Home from "./pages/Home";
import Edit from "./pages/customers/Edit";

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path='/customers/edit/:id'>
            <TemplatePage title='Editar Cliente' Component={Edit} />
          </Route>
          <Route path='/customers/add'>
            <TemplatePage title='Clientes' Component={CustomersRegister} />
          </Route>
          <Route path='/customers'>
            <TemplatePage title='Clientes' Component={CustomersList} />
          </Route>
          <Route path='/'>
            <TemplatePage title='Página Inicial' Component={Home} />
          </Route>
        </Switch>
      </TemplateDefault>
    </Router>
  );
};

export default App;
