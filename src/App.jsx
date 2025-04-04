
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect,useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Banner from './components/Banner/Banner';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import TopProducts from './components/TopProducts/TopProducts';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';

function App() {
  const [orderPopUp, setOrderPopUp] = useState(false);
  const handleOrderPopup =()=>{
    setOrderPopUp(!orderPopUp);
    console.log(`Handle ki pop ${orderPopUp}`)
  };
  useEffect(() => {
    AOS.init({
      offset:100,
    duration:800,
      easing:'ease-in-sine',
      delay:100,
    });
    AOS.refresh();
  },[]);

  return (
   <div className='bg-white dark:bg-gray-900 dark:text-white duration:200'>
        <Navbar handleOrderPopup={handleOrderPopup}/>
        <Hero handleOrderPopup={handleOrderPopup}/>
        <Products/>
        <TopProducts handleOrderPopup={handleOrderPopup}/>
       <Banner/>
       <Subscribe/>
       <Testimonials/>
       <Footer/>
       <Popup orderPopUp={orderPopUp} setOrderPopUp={setOrderPopUp}/>
   </div>
  )
}

export default App
