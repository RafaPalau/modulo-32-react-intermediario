import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import TemplateDefault from './templates/Default';
import Home from "./pages/Home"

const App = () => {
  return (
    <Router>
   <TemplateDefault>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </TemplateDefault>
    </Router>
   
  );
};

export default App;
