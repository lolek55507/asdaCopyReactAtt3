import { useState, useEffect } from 'react'
import './App.css'
import Nav from './componets/nav'
import TopImage from './componets/topImage'
import TextTopImage from './componets/textTopImage'
import Searchbox from './componets/searchbox'
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
    </div>
  )
}

export default App