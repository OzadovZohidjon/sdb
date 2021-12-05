import React from "react";
import './assets/style/style.scss'
import AppRouter from "./components/appRouter/AppRouter";
import Footer from "./components/footer/Footer";
import {useStore} from "react-redux";
import Navbar from "./components/navbar/Navbar";
function App() {
    const  store  = useStore();
    let state = store.getState();
    let navbarActive = state.navbarLinks.navbarActive;

  return (
    <div className={navbarActive ? 'wrapper modal_active' : 'wrapper'}>
        <Navbar/>
        <AppRouter/>
        <Footer/>
    </div>
  );
}

export default App;

// https://api.sdb.uz/api/v1/
