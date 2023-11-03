import { BrowserRouter } from "react-router-dom";
// import "./App.css";
import SearchBar from "./david/SearchBar";
import Context from "./david/context/Context";
import { useReducer } from "react";
import Reducer from "./david/context/reducer";

function App() {

  const[contextValue, setContextValue]=useReducer( Reducer, {
    searchValue: (''),
    searchData: [],
    page: 1,
    per_page: 12,
    // currency: localStorage.getItem('currency') || 'EUR',
  })

  return (
    <BrowserRouter >
      <Context.Provider value={{ state: contextValue, dispatch: setContextValue }} >
        <>
          <SearchBar />

        </>
      </Context.Provider >
    </BrowserRouter>
  )
}

export default App;
