import logo from './assets/logo.svg'
import menu from './assets/icon-menu.svg'
import basket from './assets/icon-cart.svg'
import profilePic from './assets/image-avatar.png'
import { MobileCart } from './MobileCart'


export function MobileMenu(props)
{
    return(
        <>
        <div className="mobile-menu">
            <div className='menu-logo-holder'>
                <img src={menu}  alt="menu" onClick={props.toggleSidebar} />
                <img src={logo} className="logo" width='120px' alt='logo'/>
            </div>
            <div className='menu-logo-holder'>
               <span className='basket-counter' style={{visibility:props.cartItems[0]?.qty?'visible':'hidden'}}>{props.cartItems[0]?.qty}</span>
                <img src={basket}  alt="basket"  width="25px" onClick={props.toggleCart}/>
                <img src={profilePic} className="avatar" width='30px' alt='avatar'/>
            </div>
            

        </div>
        <MobileCart visible={props.visible} items={props.cartItems} removeFromCart={props.removeFromCart} />
        </>
    )
}