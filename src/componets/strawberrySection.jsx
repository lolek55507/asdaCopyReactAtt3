import React, { useState } from 'react';
import  './strawberrySection.css'
import strawberryImage from '../assets/strawberry-basket-full.png';

function KindButtons() {
    const labels = [
        "Store Roles",
        "George",
        "Pharmacy & Optical",
        "Head office",
        "Warehouse & Logistics",
        "Driving",
        "Technology",
        "Future talent"
    ];

    const [activeIndexes, setActiveIndexes] = useState([]);

    const toggleClass = (index) => {
        setActiveIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)  
                : [...prev, index]                
        );
    };
    

    return (
        <div className="kind-of-roles">
            {labels.map((label, index) => (
                <div
                    key={index}
                    className={activeIndexes.includes(index) ? 'kindB' : 'kindA'}
                    onClick={() => toggleClass(index)}
                >
                    {label}
                </div>
            ))}
        </div>
    );
}

function Values() {
    const labels = [
        "Culture",
        "People",
        "Community",
        "Sustainability",
        "Diversity",
    ];

    const [activeIndexes, setActiveIndexes] = useState([]);

    const toggleClass = (index) => {
        setActiveIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)  
                : [...prev, index]                
        );
    };
    

    return (
        <div className="kind-of-roles">
            {labels.map((label, index) => (
                <div
                    key={index}
                    className={activeIndexes.includes(index) ? 'kindB' : 'kindA'}
                    onClick={() => toggleClass(index)}
                >
                    {label}
                </div>
            ))}
        </div>
    );
}

function Amazings() {
    const labels = [
        "Lots of Perks and Benefits",
        "Opportuinity to learn",
        "Intresting careers paths",
        "flexible working hours", 
    ];

    const [activeIndexes, setActiveIndexes] = useState([]);

    const toggleClass = (index) => {
        setActiveIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)  
                : [...prev, index]                
        );
    };
    

    return (
        <div className="kind-of-roles">
            {labels.map((label, index) => (
                <div
                    key={index}
                    className={activeIndexes.includes(index) ? 'kindB' : 'kindA'}
                    onClick={() => toggleClass(index)}
                >
                    {label}
                </div>
            ))}
        </div>
    );
}

function StrawberrySection(props) {  

    return (
        <div className="strawberry-section-main-container">
            <h1 className="header-for-strawberry-section">
                What's your <span className="fake-break">everything?</span>
            </h1>
            
            <div className="top-description-container bordered">
            <div className="top-description-text-container">

            
                <p className="top-description topp">
                Fill up your personalised career basket
                </p>
                <p className="top-description">
                When it comes to career possibilities, we’ve got everything covered here at Asda. And more. 
                </p>
                <p className="top-description">
                Simply click on the items you’re interested in for your career, from teams you’d 
                like to join to benefits you’d love to see, and they’ll be added to your personalised careers basket. Then, all you need 
                to do is click ‘View Basket’ to see everything you’ve selected. All saved for you to access and edit whenever you need, in one place.
                </p>
                <p className="top-description">

                </p>
                <p className="top-description">
                Just like popping all your favourites in your basket at your local Asda.
                </p>
            </div>
                <div className="top-description-image-container">
                    <img className="strawberry-image" src={strawberryImage} alt="strawberry" />
                </div>

            </div>
            <div className="kind-of-roles-main-container bordered">
                <h1>What kind of roles are you interested in?</h1>
                <KindButtons />
            </div>
            <div className="kind-of-roles-main-container bordered">
                <h1>What kind of Values are you interested in?</h1>
                <Values />
            </div>
            <div className="kind-of-roles-main-container bordered">
                <h1>What would make your day amazing?</h1>
                <Amazings />
            </div>
            <div className='strawberry-bottom-section-container'>
                <img src={strawberryImage}></img>
                <div className='kindA'>
                View my basket
                </div>
            </div>
    </div>
    )
}

export default StrawberrySection;