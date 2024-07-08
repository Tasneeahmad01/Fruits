import React from 'react';
import './Flavour.css';

const Images = [
  {
    src: 'https://m.media-amazon.com/images/I/7134XQsWIPL._AC_UF1000,1000_QL80_.jpg',
    alt: 'Image 1',
    heading: 'Chart Fruit',
  },
  {
    src: 'https://m.media-amazon.com/images/I/7134XQsWIPL._AC_UF1000,1000_QL80_.jpg',
    alt: 'Image 1',
    heading: 'Chart Fruit',
  },
  {
    src: 'https://m.media-amazon.com/images/I/7134XQsWIPL._AC_UF1000,1000_QL80_.jpg',
    alt: 'Image 1',
    heading: 'Chart Fruit',
  },
  {
    src: 'https://m.media-amazon.com/images/I/7134XQsWIPL._AC_UF1000,1000_QL80_.jpg',
    alt: 'Image 1',
    heading: 'Chart Fruit',
  },
  {
    src: 'https://m.media-amazon.com/images/I/7134XQsWIPL._AC_UF1000,1000_QL80_.jpg',
    alt: 'Image 1',
    heading: 'Chart Fruit',
  },
  {
    src: 'https://m.media-amazon.com/images/I/7134XQsWIPL._AC_UF1000,1000_QL80_.jpg',
    alt: 'Image 1',
    heading: 'Chart Fruit',
  },
  {
    src: 'https://m.media-amazon.com/images/I/7134XQsWIPL._AC_UF1000,1000_QL80_.jpg',
    alt: 'Image 1',
    heading: 'Chart Fruit',
  },
  {
    src: 'https://m.media-amazon.com/images/I/7134XQsWIPL._AC_UF1000,1000_QL80_.jpg',
    alt: 'Image 1',
    heading: 'Chart Fruit',
  },
  {
    src: 'https://m.media-amazon.com/images/I/7134XQsWIPL._AC_UF1000,1000_QL80_.jpg',
    alt: 'Image 1',
    heading: 'Chart Fruit',
  },
  {
    src: 'https://m.media-amazon.com/images/I/7134XQsWIPL._AC_UF1000,1000_QL80_.jpg',
    alt: 'Image 1',
    heading: 'Chart Fruit',
  },
 
];

function Flavour() {
  return (
    <div className="Imags">
      {Images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image.src} alt={image.alt} className="Flow"/>
          <h5>{image.heading}</h5>
        </div>
      ))}
    </div>
  );
}

export default Flavour;
