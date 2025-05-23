import { useState, useEffect } from 'react'
import './App.css'
import Nav from './componets/nav'
import TopImage from './componets/topImage'
import TextTopImage from './componets/textTopImage'
import Searchbox from './componets/searchbox'
import SlideShow from './componets/slideShow'
import StrawberrySection from './componets/strawberrySection'
import Footer from './componets/footer'


const cardsArray = [
  {
      id: 1,
      src: "https://www.asda.jobs/uploads/campaign-slider-images/_860w/Operative_colleague.jpg",
      title: "Be asda Be you.",
      class: "default"
  },
  {
      id: 2,
      src: "https://www.asda.jobs/uploads/campaign-slider-images/_860w/Colleagues_at_AH_on_steps.png",
      title: "Optical with clear vision.",
      class: "default"
  },
  {
      id: 3,
      src: "https://www.asda.jobs/uploads/campaign-slider-images/_860w/1400.jpeg",
      title: "Future talent.",
      class: "large"
  },
  {
      id: 4,
      src: "https://www.asda.jobs/uploads/campaign-slider-images/_860w/Optical_colleague.jpg",
      title: "Shape the future of Asda. Join our procurment team in a number of exciting roles.",
      class: "default"
  },
]

function App() {
  const [scrollPercent, setScrollPercent] = useState(0);

  function getScrollPercentage() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    return scrollPercent;
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollPercent(getScrollPercentage());
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <TopImage />
      <Nav scrollPercent={scrollPercent} />
      <TextTopImage />
      <Searchbox />
      <SlideShow cardsArray={cardsArray} />
      <StrawberrySection />
      <Footer />
    </div>
  )
}

export default App