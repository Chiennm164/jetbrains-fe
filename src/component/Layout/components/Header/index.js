import './header.scss'
import ListLink from './ListLink'
import Logo from "./Logo"
import NavBar from './NavBar'
function Header() {
     return (
          <div className="container">
               <div className='row d-flex align-items-center '>
                    <div className='col-1 p-0'>
                      <Logo />
                      </div>
                    <nav className='col-11 p-0 d-flex justify-content-end align-items-center'>
                        <div className='navbar'> <NavBar /></div>
                         <div className='link'> <ListLink /></div>
                    </nav>
               </div>
          </div>
     )
}
export default Header
