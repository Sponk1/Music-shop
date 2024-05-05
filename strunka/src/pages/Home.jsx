import React from "react"
import Header from "../components/Header/Header"
import HomeBody from "../components/PageComponents/ForHomePage/HomeBody";
import Footer from "../components/Footer/Footer"

function Home() {
    return(
        <div>
            <Header />
            <HomeBody />
            <Footer />
        </div>
    );
}

export default Home;