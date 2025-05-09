import React from "react";
import "./slideShow.css";


function SlideShow({ cardsArray }) { 
    let defaultArray = cardsArray;
    const [cards, setCards] = React.useState(defaultArray);
    const [largeIndex, setLargeIndex] = React.useState(2);
    return (
        <div>
            <div className="slideshow-Main-Container">
            {cards.map((card) => {
                return (
                    <div className="slide" key={card.id}>
                        <img className="cardImage" src={card.src}></img>
                        <h1 className="c-title">{card.title}</h1>
                    </div>
                )
            } 
            )}
            
        </div>
        <div className="buttons-container">
                <div onClick={() => {
                    setCards(cards => {
                        let newCards = [...cards];
                        newCards.unshift(newCards.pop());
                        return newCards;
                    });
                }} className="directionButton">left</div>
                <div onClick={() => {
                    setCards(cards => {
                        let newCards = [...cards];
                        newCards.push(newCards.shift());
                        return newCards;
                    });
                }} className="directionButton">right</div>
            </div>
        </div>
        
    )
}

export default SlideShow;