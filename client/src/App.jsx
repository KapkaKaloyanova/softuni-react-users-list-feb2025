import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserList from "./components/UserList";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <UserList />

        {/* <UserInfo /> */}



        {/* <!-- Delete user component  --> */}
        
      </main>

      <Footer />
    </>
  );
}

export default App;
