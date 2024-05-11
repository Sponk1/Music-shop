import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ClientsBody from "../components/PageComponents/ForClients/ForClients"

function Clients() {
    return (
        <div>
            <Header />
            <ClientsBody />
            <Footer />
        </div>
    );
}

export default Clients;