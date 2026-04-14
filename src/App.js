import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import Detail from "./Pages/Detail";
import { books } from "./data.js";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}
        <Switch>
          <Route path="/books/:id" render={() => <Detail books={books} />} />
          <Route path="/books" exact render={() => <Books books={books} />} />
          <Route path="/cart" render={() => <h1>Cart</h1>} />
          <Route path="/" exact component={Home} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
