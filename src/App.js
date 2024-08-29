import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </HelmetProvider>
  );
}

export default App;
