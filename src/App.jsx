import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Context from "./david/context/Context";
import { useReducer } from "react";
import Reducer from "./david/context/reducer";
import Images from "./damaris/Images";
import Author from "./joe-components/Author";
import Footer from "./jakub/Footer";
import Header from "./jakub/Header";

function App() {
  const [contextValue, setContextValue] = useReducer(Reducer, {
    searchValue: "",
    searchData: [],
    page: 1,
    per_page: 12,
    userDetail: [],
    // currency: localStorage.getItem('currency') || 'EUR',
  });

  return (
    <BrowserRouter>
      <Context.Provider
        value={{ state: contextValue, dispatch: setContextValue }}
      >
        <>
          <Homepage />
        </>
      </Context.Provider>
    </BrowserRouter>
  );
}
export default App;
