import "./assets/css/boostrap.css";
import Header from "./components/Header/index.jsx";
import SubHeader from "./components/subHeader";
import HomePage from "./pages/index";
import NewDetail from "./pages/news_details";
import { useHistory, withRouter } from "react-router-dom";
import NewsState from "./context/NewContext";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const history = useHistory;
function App() {
  return (
    <NewsState>
      <Router>
        
          <Header />
          <SubHeader />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route
              component={NewDetail}
              exact
              path="/details/:title"
            />
          </Switch>
      
      </Router>
    </NewsState>
  );
}

export default App;
