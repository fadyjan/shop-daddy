import "./App.css";
import { Provider } from "react-redux";
import Pagination from "./components/Pagination/Pagination";
import store from "./reduxStore/store";
import ProductsGrid from "./components/ProductsGrid/ProductsGrid";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductsGrid></ProductsGrid>
        <Pagination ></Pagination>

      </div>
    </Provider>
  );
}

export default App;
