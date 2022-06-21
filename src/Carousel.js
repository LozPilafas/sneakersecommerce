import nextIcon from './assets/icon-next.svg';
import backIcon from './assets/icon-previous.svg';
import { useState } from 'react';

export function Carousel(props)
{
    const imgUrlList=props.urlList;
    const [imgs,setImgs]=useState(imgUrlList)
    const [selectedImage,setSelectedImage]=useState(0);
    



    //click previous img function
    const goBack=()=>
    {
        if(selectedImage===0)
        {
            return setSelectedImage(0);
        }
        else if(selectedImage===imgUrlList.length-1)
        {
           return setSelectedImage(selectedImage-1)
        }
        
        else
        {
        return setSelectedImage(selectedImage-1);
        }

    }
    //click next img function
    const goForward=()=>
    {
        if(selectedImage===imgUrlList.length-1)
        {
            return setSelectedImage(imgUrlList.length-1);
        }
        
        
        else
        {
        return setSelectedImage(selectedImage+1);
        }

    }
    


    return(
        <>
        <div className="carousel-frame">
            <img src={imgs[selectedImage]} className="carousel-image"  alt="product-image" />
            
            <img src={backIcon} className="back-icon" onClick={goBack} />
            <img src={nextIcon} className="next-icon" onClick={goForward}/>
            
            </div>
            </>
    )
}