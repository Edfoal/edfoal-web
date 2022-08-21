import './Navbar.css';
import {MenuItems} from './MenuItems';
import logo from './assets/Edfoal-header-logo.svg';
import LoginButton from '../buttons/LoginButton';


const Navbar = () => {
    return (
        <div >
            <nav className="Navbar">
                <div className="Navbar-Icon">
                    <img className="Logo" src={logo} alt="logo"/>
                </div>
                <div className="Navbar-Logo"><h1>EdFoal</h1></div>
                <div className="Navbar-Items">
                    <ul className="Items">
                        {MenuItems.map((item, index)=>{
                            return(
                                <li>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>                            
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <LoginButton/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;