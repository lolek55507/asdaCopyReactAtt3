import React from "react";
import "./searchbox.css";


function TopInformation({i, closeInfo}) {
    switch (i) {
        case 1:
            return (
                <div className="topInfoA TI GGA">
            <div className="image_container">
            <img  src="https://www.asda.jobs/uploads/hero-images/_600w/everything-we-do-hero.jpg" alt="face-Image" className="info_image" />
            </div>
            <div className="Info-Container">
            <h1 className="A-header">Everything
            we do</h1>
            <p className="A-paragraph">Whether you’re on the shop floor, behind a desk, or on the road, everything we 
                do here at Asda makes a difference to our customers' lives. So, as you can imagine, 
                a lot goes into everything we do. </p>
            <p className="A-paragraph">Find out more about all our different departments and what they get up to here.
                 So you could be a part of getting every family favourite on the shelf, 
                 and every essential onto their doorstep – wherever they live.</p>
            <div className="bottomInfoContainer">
                <div className="openButton">Find out more</div>
                <div className="closeButton" onClick={() => {
                        closeInfo(0);
                    }}>X</div>
            </div>
            </div>
            </div>
            );
        case 2:
            return (
                <div className="topInfoB TI GGB">
            <div className="image_container">
            <img  src="https://www.asda.jobs/uploads/hero-images/_600w/everything-we-offer-hero.jpg" alt="face-Image" className="info_image" />
            </div>
            <div className="Info-Container">
            <h1 className="A-header B-paragraph">Everything
            we offer</h1>
            <p className="A-paragraph B-paragraph">So, what does finding your everything with Asda mean – not just for your career, but for you? When you join us, 
                you’ll discover a wide range of benefits and rewards that really recognise all the great things you get up to everyday. 
                And all the stuff that just makes working life better for you, from learning and development to flexible working.</p>
            <div className="bottomInfoContainer">
                <div className="openButtonB">Find out more</div>
                <div className="closeButton" onClick={() => {
                        closeInfo(0);
                    }}>X</div>
            </div>
            </div>
            </div>
            );
        case 3:
            return (
                <div className="topInfoC TI GGC">
                <div className="image_container">
                <img  src="https://www.asda.jobs/uploads/hero-images/_600w/everything-youll-love-hero.jpg" alt="face-Image" className="info_image" />
                </div>
                <div className="Info-Container">
                <h1 className="A-header B-paragraph">Everything
                you'll love</h1>
                <p className="A-paragraph B-paragraph">Being a place that has just about everything means there’s a lot to love – for our customers, and for you. Whatever role you’re in,
                     you’ll be part of our mission to become Britain's go-to supermarket, and we’re making that 
                    exciting journey one our colleagues can enjoy every minute of. Discover how we’re doing that here,
                     and learn more about everything there is to love about working at Asda.</p>
                <div className="bottomInfoContainer">
                    <div className="openButtonC">Find out more</div>
                    <div className="closeButtonC" onClick={() => {
                        closeInfo(0);
                    }}>X</div>
                </div>
                </div>
                </div>
            );
        default:
            return "";
    }
}

function Searchbox() {

   const [info, setInfo] = React.useState(0);

    return (
        <div className="searchbox-container">
            
            <div className="everythings-container">
           <div onClick={() => {
                    if (info === 1) {
                        
                    } else {
                    setInfo(1);
                    }
                }} className={info == 1 ? "everything A hide" : "everything A"}>Everything
                we do</div> 
                
                <div onClick={() => {
                    if (info === 2) {
                        
                    } else {
                    setInfo(2);
                    }
                }} className={info == 2 ? "everything B hide" : "everything B"}>Everything
                we offer</div>
                <div onClick={() => {
                    if (info === 3) {
                        
                    } else {
                    setInfo(3);
                    }
                }} className={info == 3 ? "everything C hide" : "everything C"}>Everything
                you'll love</div>
            </div>
            
            <input type="text" className="searchbox" placeholder="Search for jobs and website content" />
           <TopInformation i={info} closeInfo={() => setInfo(0)}  />
        </div>
    )
}
export default Searchbox;