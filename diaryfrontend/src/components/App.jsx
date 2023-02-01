import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import GetDiaries from "./GetDiaries";

function App() {
    return (
    <div class="flex flex-col h-screen">
        <Header></Header>
        <GetDiaries></GetDiaries>
        <Footer></Footer>
    </div>
    );
}

export default App;