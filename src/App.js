import Router from "../src/Router/Router";
import GlobalState from "./GlobalSatate/GlobalState";

const App = () => {
  return (
    <GlobalState>
      <Router/>
      {/* TESTE */}
    </GlobalState>
  );
}

export default App;
