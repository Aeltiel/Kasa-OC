import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

//usage de link au lieu d'un <a> pour les routes entre les pages
function Header(){
    return(
        <header>
            <img src={Logo} alt='Logo Kasa'/>
            <nav>
            <li><Link to='/kasa'>Accueil</Link></li>
            <li><Link to='/APropos'>A propos</Link></li>
            </nav>
        </header>
    )
}
export default Header