
import trashIcon from './assets/icon-delete.svg'

export function MobileCart(props)
{

    if(!Boolean(props.visible)===true) return;
    let itemsJsx=[];
    if(props?.items.length>0)
    {
         itemsJsx=props.items.map((item,index)=>
            {
                return(
                    <div className="mobile-cart-item" key={index} >
                    <img src={item.imgUrl} width="50px" className="mobile-cart-thumbnail-pic"/>
                    <div className="mobile-cart-details">
                        <p className="mobile-cart-item-desc" style={{textOverflow:'ellipsis'}}>{item.title} </p>
                        <div className="mobile-cart-item-price" style={{marginTop:10,textAlign:'left'}}>
                            £{item.price.toFixed(2)} x {item.qty}<span style={{fontWeight:700,color:"black",marginLeft:15}}>£{(item.price*item.qty).toFixed(2)}</span> 
                        </div>
                    </div>
                    <img  src={trashIcon} onClick={props.removeFromCart} width="15px" height="15px" style={{cursor:'pointer'}}/>
                </div>

                )
            })
            itemsJsx.push( <button key={'9999999'} className="product-body-addtocart" style={{width:'90%',marginBlock:15}}>Checkout</button>)
    }






    return(
        <>
        <div className="mobile-cart-canvas">
            <div className="mobile-cart-title">
                Cart
            </div>
            <div className="mobile-cart-body">
                {itemsJsx.length>=1?itemsJsx:"Your cart is empty."}
                
                
                
                

               
                
            </div>

        </div>
        </>
    )
}