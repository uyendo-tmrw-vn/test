import "styles/app.scss";
import "styles/global.scss";
import { Provider } from "react-redux";
import store from "redux/store";
import Home from "pages/HomePage";
import "antd/dist/antd.css";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
