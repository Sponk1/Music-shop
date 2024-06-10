import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import AboutCompanyBody from "../components/PageComponents/ForAboutCompany/AboutCompanyBody";

function AboutCompany() {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY || window.pageYOffset;
            const bodyHeight = document.body.offsetHeight;

            // Проверяем, долистал ли пользователь до конца страницы
            if (scrollY + windowHeight >= bodyHeight) {
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
            <AboutCompanyBody />
            {showFooter && <Footer />}
        </div>
    );
}

export default AboutCompany;
