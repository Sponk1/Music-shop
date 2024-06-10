import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import ClientsBody from "../components/PageComponents/ForClients/ForClients"

function Clients() {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop + windowHeight >= documentHeight) {
                setShowFooter(true);
            } else {
                setShowFooter(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <ClientsBody />
            {showFooter && <Footer className="footer" />}
        </div>
    );
}

export default Clients;