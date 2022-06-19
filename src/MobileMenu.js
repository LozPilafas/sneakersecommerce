import logo from './assets/logo.svg'
import menu from './assets/icon-menu.svg'
import basket from './assets/icon-cart.svg'
import profilePic from './assets/image-avatar.png'


export function MobileMenu()
{
    return(
        <>
        <div className="mobile-menu">
            <div className='menu-logo-holder'>
                <img src={menu}  alt="menu" />
                <img src={logo} className="logo" width='120px' alt='logo'/>
            </div>
            <div className='menu-logo-holder'>
                <img src={basket}  alt="basket"  width="25px"/>
                <img src={profilePic} className="avatar" width='40px' alt='avatar'/>
            </div>

        </div>
        </>
    )
}