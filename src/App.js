import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageTemplate from "./pages/PageTemplate";
import Users from "./pages/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <PageTemplate title="Users">
            <Users />
          </PageTemplate>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
