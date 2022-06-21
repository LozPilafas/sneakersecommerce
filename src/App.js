import { Carousel } from "./Carousel";
import { MobileMenu } from "./MobileMenu";
import { MobileSideMenu } from "./MobileSideMenu";
import { ProductBody } from "./ProductBody";
import {useEffect, useState} from 'react'




function App(props) {

  const [sidebarVisible,setSidebarVisibile]=useState(false);
  const [cartVisible,setCartVisible]=useState(false)
  const [cartItems,setCartItems]=useState([])

  

  



  //function to passdown - to toggle sidebar
  const toggleSidebar=()=>
  {
    if(!sidebarVisible) setSidebarVisibile(true)
    else setSidebarVisibile(false)
    
  }
//function to passdown- to toggle cart view
const toggleCart=()=>
{
  if(!cartVisible) setCartVisible(true)
    else setCartVisible(false)
}

//function to pass down - add to cart
const addToCart=(item,qty)=>
{
  
  const fIndex=cartItems.findIndex((ArrayItem)=> ArrayItem.id===item.id)
  if(fIndex==-1)
  {

  setCartItems([...cartItems,{...item,qty:qty}])
  }
  else{ 

    
    const updatedCart=cartItems.map(arrayItem=>{
      if(arrayItem.id===item.id)
      {
        arrayItem.qty+=qty;
        return arrayItem
      }
      
      
    })

    setCartItems([...updatedCart])
    
    
    

  }



}

//function to pass down - empty cart
const removeFromCart=()=>{

  setCartItems([])
}
  return (
    <>
    <MobileSideMenu toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible}  />
    
   <MobileMenu toggleSidebar={toggleSidebar} toggleCart={toggleCart} visible={cartVisible} cartItems={cartItems} removeFromCart={removeFromCart} />
   {/** Carousel takes one prop (urlList) - a list of URL images for the product */}
   <Carousel urlList={props.item.galleryUrlList}/>
   <ProductBody title={props.item.title} description={props.item.description} price={props.item.price} reduced={{reduced:props.item.reduced,percentage:props.item.percentage}} addToCart={addToCart} item={props.item} />
   </>
  );
}

export default App;
