import './App.css';
import ProductsList from './Component/ProductsList';
import Header from './Component/Header';
import { useState } from 'react';
import Slider from './Component/Slider';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';


function App() {

  let [headerCount, setHeaderCount] = useState(0);
  let [triggerPopup, setTriggerPopup] = useState(false);
  let [status,setStatus]= useState('all');
  

  function triggerGetPopup() {
    setTriggerPopup(true);
  }

  function setPopClick() {
    setTriggerPopup();
  }

  function handleData(data){
    setStatus(data);
  }


  return (
    <div>
      <Header headerCount={headerCount} onTriggerPopup={triggerGetPopup} />
      <div className='df mx-w1'>
        <Navbar onData={(data)=>{handleData(data)}}  />
        <div >
          <Slider />
          <ProductsList status={status}  onHeaderCount={(count) => { setHeaderCount(count) }} triggerPopup={triggerPopup} onCloseCart={() => { setPopClick(false) }} />
          <Footer/>
        </div>
      </div>
    </div>
  );
}


export default App;
