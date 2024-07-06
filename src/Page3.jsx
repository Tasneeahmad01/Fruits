import React from 'react';
import './Page3.css'; 

const images = [
  {
    src: 'https://media.istockphoto.com/id/1130112004/photo/vegan-detox-buddha-bowl-with-turmeric-roasted-chickpeas-greens-avocado-persimmon-blood-orange.webp?b=1&s=170667a&w=0&k=20&c=wIBkdI3RvZkip-iMyD05uPI4XFvi2MNOFc_9LlNdbqU=',
    alt: 'Image 1',
    title: 'Title 1',
    paragraph:'Close up tasty breakfast of fruit salad with oat muesli. Dietary breakfast',
    heading: 'Heading 1',
    buttonText: 'Add Cart'
  },
  {
    src: 'https://media.istockphoto.com/id/1440422629/photo/healthy-food-oatmeal-fruits-honey-curd-breakfast.webp?b=1&s=170667a&w=0&k=20&c=K9XvbqDSG9mDBhD4Jghyda0hmKDkJcIrgLClrrJQCS8=',
    alt: 'Image 1',
    title: 'Title 1',
    paragraph:'Healthy food, Oatmeal, Fruits, Honey, Curd, Breakfast',
    heading: 'Heading 1',
    buttonText: 'Add Cart'
  },
  {
    src: 'https://media.istockphoto.com/id/628124638/photo/acai-breakfast-superfoods-smoothies-bowl-with-chia-seeds-bee-pollen.jpg?s=612x612&w=0&k=20&c=hucIK0tKop172fbM002dtACbRNSvvC-oCsBk-TXTF-k=',
    alt: 'Image 1',
    title: 'Title 1',
    paragraph:'Healthy Muesli with fresh raw fruit banana and strawberry and breakfast.',
    heading: 'Heading 1',
    buttonText: 'Add Cart'
  },
  {
    src: 'https://media.istockphoto.com/id/663800874/photo/granola-close-up-with-fresh-fruit.jpg?s=612x612&w=0&k=20&c=yiRaG03VLguZisB8gr_7odYU8NVogZVL8RVFQydlLNE=',
    alt: 'Image 1',
    title: 'Title 1',
    paragraph:'Granola close-up with Fresh Fruit including slices.',
    heading: 'Granola',
    buttonText: 'Add Cart'
  },
  {
    src: 'https://media.istockphoto.com/id/1263894209/photo/perfect-breakfast.jpg?s=612x612&w=0&k=20&c=qFrPv11GyG9PkOuK-LXClW4mlmB2QT9pdR_wlKhMqhY=',
    alt: 'Image 1',
    title: 'Title 1',
    paragraph:'Close up of various raw vegetables in a basket. Local market fresh vegetables.',
    heading: 'Heading 1',
    buttonText: 'Add Cart'
  },
  {
    src: 'https://media.istockphoto.com/id/597967490/photo/different-fruits-of-summer.jpg?s=612x612&w=0&k=20&c=p3Cyt5ZyjSF_eKcVY__-KFU1faekyCvay-0mbfVhlgg=',
    alt: 'Image 1',
    title: 'Title 1',
    paragraph:'Still life with fruits placed in a basket made ââof natural materials.',
    heading: 'Heading 1',
    buttonText: 'Add Cart'
  },
  {
    src: 'https://media.istockphoto.com/id/542297104/photo/smoothie-in-a-bowl-with-fruits-and-seeds.jpg?s=612x612&w=0&k=20&c=PIQsdEVKqE_56RKE8pYOtCXJLoKcc7ZRkJnvl1KHJjk=',
    alt: 'Image 1',
    title: 'Title 1',
    paragraph:'Smoothie in a bowl with fruits and seeds, copy space, white wood',
    heading: 'Heading 1',
    buttonText: 'Add Cart'
  },
  {
    src: 'https://media.istockphoto.com/id/1420225668/photo/yogurt-with-granola-fruits-and-berries-on-a-clay-plate-with-a-wooden-spoon-yogurt-with.jpg?s=612x612&w=0&k=20&c=WHW4mimaootCkvlaHKH3_cVqSXZmSKB-U1xm9koQKqc=',
    alt: 'Image 1',
    title: 'Title 1',
    paragraph:'Yogurt with granola, fruits and berries on a clay plate with a wooden spoon',
    heading: 'Heading 1',
    buttonText: 'Add Cart'
  },
];

function Page3() {
    const Like =()=>{
        console.log("Button was pressed");
    }
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="image-card">
          <img src={image.src} alt={image.alt} title={image.title} paragraph = {image.paragraph}/>
          <a href="" className="para"><p>{image.paragraph}</p></a>
          <h4>{image.heading}</h4>
         <a href="/AddCart"><button onClick={Like}>{image.buttonText}</button></a>
        </div>
      ))}
    </div>
  );
}

export default Page3;
