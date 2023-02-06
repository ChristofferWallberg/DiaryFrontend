import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import GetDiaries from "./GetDiaries";

function App() {
  return (
    <div className="flex float-left flex-col">
      <Header></Header>
      <GetDiaries />
      <Footer></Footer>
    </div>
  );
}

export default App;
