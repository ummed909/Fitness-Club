import './App.css';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Plans from './Components/Plans/Plans';
import Contact from './Components/Contact/Contact';
import Testimonial from './Components/Testimonial/Testimonial';
import Footer from './Components/Contact/Footer/Footer';
function App() {
  return (
    <div className="App">
         <Hero/>
         <Programs/>
         <Reasons/>
         <Plans/>
         <Testimonial/>
         <Contact/>
         <Footer/>
    </div>
  );
}

export default App;
