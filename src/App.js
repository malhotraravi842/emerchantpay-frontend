import "./App.css";
import { Route, Switch } from "react-router-dom";
import Success from "./pages/Success";
import Failed from "./pages/Failed";
import Home from "./pages/Home";
import Pending from "./pages/Pending";
import Cancelled from "./pages/Cancelled";
import Notification from "./pages/Notification";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/success" component={Success} />
        <Route exact path="/failure" component={Failed} />
        <Route exact path="/pending" component={Pending} />
        <Route exact path="/cancelled" component={Cancelled} />
        <Route exact path="/notification" component={Notification} />
      </Switch>
    </div>
  );
}

export default App;
