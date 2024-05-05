import React from "react"
import "./homeBody.css"
import pianoImg from "../../../img/PianoCarousel.png"
import guitarImg from "../../../img/GuitarCarousel.png"
import drumImg from "../../../img/DrumsCarousel.png"
import { BiColor } from "react-icons/bi"


const HomeBody = () => {
    return(
        <div>
            <div className="full-body">
                <div className="search-bar">
                    <input className="search-input" type="text" placeholder="поиск"/>
                </div>
                <div className="tools-img">
                    <div className="piano-img">
                        <img src={pianoImg} alt="пианино" />
                    </div>
                    <div className="guitar-n-drum-img">
                        <div className="guitar-img">
                            <img src={guitarImg} alt="гитары" />
                        </div>
                        <div className="drums-img">
                            <img  src={drumImg} alt="барабаны" />
                        </div>
                    </div>
                </div>
                <div className="divider">
                    <hr/>
                </div>
                <div className="map-n-desc">
                    <div className="map">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa1d1cdfcb424c5599bde9ecb64cac6c7c85ec1822928f2d4a4ad7559ca28aebf&amp;source=constructor" width="730" height="354" ></iframe>
                    </div>
                    <div className="desc">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBody;