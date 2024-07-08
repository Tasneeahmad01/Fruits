
import React from 'react';
import ProductCard from './ProductCard';
// import './NewArrivals.css'; 

const products = [
  { image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ4pO1qbpPHhaTtUfp2OVLkEMZt9UnaPSL9ZUSMEZ9zCpSkXFtFZPd53uBz0uSmoCfDslGnQyClpJcdmTXtfUZrdc_s_AjYTCmBcSDx0zv-R5Mt8wExUTbkQQ', title: 'MM04-Gray' },
  { image: 'https://static.vecteezy.com/system/resources/previews/023/850/246/non_2x/almonds-with-leaves-isolated-generative-ai-png.png', title: 'Rural Field 1' ,style:"font-size:30px"},
  { image: 'https://static.dilligrocery.com/78-thickbox_default/walnuts.jpg', title: 'Beginner\'s Yoga' },
  { image: 'https://www.orgpick.com/cdn/shop/products/pomegranate.png?v=1541589453', title: 'Established Fact 1' },
  { image: 'https://www.jiomart.com/images/product/original/rvi2hngzxe/mix-dry-fruit-500gms-product-images-orvi2hngzxe-p599475490-0-202303170445.jpg?im=Resize=(420,420)', title: 'This was a very sweetly Pear and very raddish' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGa6-Fexiru2K1Fgyw8fhA3MYEYAd205ZXA&s', title: 'Established Fact 12' },
  { image: 'https://img.freepik.com/premium-photo/grapes-juice-table_62193-1443.jpg?w=360', title: 'Wayfarer Bag' },
  { image: 'https://www.kenshodaily.com/cdn/shop/products/Strawberry.png?v=1672742952', title: 'MM04-Gray' },
];

const Page1 = () => {
  return (
    
    <div className="new-arrivals">
      <div>
        <img src="https://www.shutterstock.com/shutterstock/photos/1140803750/display_1500/stock-vector-forest-berry-and-milk-splash-fruit-and-yogurt-d-realistic-vector-icon-1140803750.jpg" alt="" className="Img-Gallery"/>
      </div>
      <h5 className="text-center mt-5" style={{color:"#ffb703"}}>Organic food</h5>
      <h2 className="text-center">New Arrivals</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} image={product.image} title={product.title} />
        ))}
      </div>
    </div>
  );
};
export default Page1;