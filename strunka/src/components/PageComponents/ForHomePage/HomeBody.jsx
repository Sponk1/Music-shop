import {React, useContext} from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./homeBody.css";



import pianoImg from "../../../img/PianoCarousel.png";
import pianoImg2 from "../../../img/PianosCard2.png";
import pianoImg3 from "../../../img/PianosCard3.png";

import guitarImg from "../../../img/GuitarCarousel.png";
import drumImg from "../../../img/DrumsCarousel.png";
import { Context } from "../../../main";

const HomeBody = () => {
    return (
        <div className="full-body">
            <div className="search-bar">
                <input className="search-input" type="text" placeholder="поиск" />
            </div>
            <div className="tools-img">
                <div className="piano-img">
                    <Carousel
                        showArrows={true}
                        autoPlay={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                    >
                        <div>
                            <img src={pianoImg} alt="пианино" />
                        </div>
                        <div>
                            <img src={pianoImg2} alt="пианино" />
                        </div>
                        <div>
                            <img src={pianoImg3} alt="пианино" />
                        </div>
                    </Carousel>
                </div>
                <div className="guitar-n-drum-img">
                    <div className="guitar-img">
                        <img src={guitarImg} alt="гитары" />
                    </div>
                    <div className="drums-img">
                        <img src={drumImg} alt="барабаны" />
                    </div>
                </div>
            </div>
            <div className="divider">
                <hr />
            </div>
            <div className="map-n-desc">
                <div className="map">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa1d1cdfcb424c5599bde9ecb64cac6c7c85ec1822928f2d4a4ad7559ca28aebf&amp;source=constructor" width="730" height="354" ></iframe>
                </div>
                <div className="desc">
                </div>
            </div>
        </div>
    );
}

export default HomeBody;

