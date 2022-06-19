import { Carousel } from "./Carousel";
import { MobileMenu } from "./MobileMenu";
import { ProductBody } from "./ProductBody";



function App() {
  return (
    <>
    
   <MobileMenu/>
   {/** Carousel takes one prop (urlList) - a list of URL images for the product */}
   <Carousel urlList={['/assets/image-product-1.jpg','/assets/image-product-2.jpg','/assets/image-product-3.jpg']}/>
   <ProductBody title="Fall Limited Edition Sneakers" description="These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer." price="125.00" reduced={{reduced:true,percentage:50}}/>
   </>
  );
}

export default App;
