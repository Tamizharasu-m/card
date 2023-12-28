import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './Slider.css';

const images = [
  { url: "../Images/571333.jpg" },
  { url: "../Images/744648.jpg" },
  { url: "../Images/794224.jpg" },
  { url: "../Images/desktop-wallpaper-fresh-fruits-and-vegetable-whole-foods.jpg" },
  { url: "../Images/571331.jpg" }
];

export default function Slider() {
  return (
    <div className='align-center'>
      <SimpleImageSlider
        width={1130}
        height={400}
        images={images}
        showBullets={true}
        showNavs={false}
        autoPlay
      />
    </div>
  );
}
