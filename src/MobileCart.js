
import trashIcon from './assets/icon-delete.svg'

export function MobileCart(props)
{

    if(!Boolean(props.visible)===true) return;


    return(
        <>
        <div className="mobile-cart-canvas">
            <div className="mobile-cart-title">
                Cart
            </div>
            <div className="mobile-cart-body">
                <div className="mobile-cart-item">
                    <img src="/assets/image-product-1-thumbnail.jpg" width="50px" className="mobile-cart-thumbnail-pic"/>
                    <div className="mobile-cart-details">
                        <p className="mobile-cart-item-desc" style={{textOverflow:'ellipsis'}}>Fall Limited Edition </p>
                        <div className="mobile-cart-item-desc" style={{marginTop:10,textAlign:'left'}}>
                            £215 x 3<span style={{fontWeight:700,color:"black",marginLeft:15}}>£519</span> 
                        </div>
                    </div>
                    <img  src={trashIcon} width="15px" height="15px" style={{cursor:'pointer'}}/>
                </div>
                
                
                
                

                <button className="product-body-addtocart" style={{width:'90%',marginBlock:15}}>Checkout</button>
                
            </div>

        </div>
        </>
    )
}