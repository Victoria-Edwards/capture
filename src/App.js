import React from "react";
//Global styles
import GlobalStyle from "./components/GlobalStyled";
//Import pages
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
