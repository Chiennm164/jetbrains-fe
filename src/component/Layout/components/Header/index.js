import './header.scss'
import ListLink from './ListLink'
import Logo from "./Logo"
import NavBar from './NavBar'
function Header() {
     return (
          <div className="container">
               <div className='row d-flex flex-row align-items-center'>
                    <div className="col-1"><Logo /> </div>
                    <div className="col-9 d-flex justify-content-end"><NavBar /></div>
                    <div className="col-2"><ListLink /></div>
               </div>
          </div>
     )
}
export default Header
