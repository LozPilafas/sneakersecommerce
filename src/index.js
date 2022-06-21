import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App item={{imgUrl:'/assets/image-product-1-thumbnail.jpg',
    id:1234,
    title:'Fall Limited Edition Sneakers',
    qty:1,
    price:219.00,
    galleryUrlList:['/assets/image-product-1.jpg','/assets/image-product-2.jpg','/assets/image-product-3.jpg'],
    description:"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    reduced:true,
    percentage:50 }}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

