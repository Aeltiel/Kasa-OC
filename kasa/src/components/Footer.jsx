import LogoBlanc from '../assets/LogoBlanc.png'
function Footer (){
return(
    <footer>
        <img className = "footer__img" src={LogoBlanc} alt="Logo Kasa blanc"/>
        <p className='footer__text'>
            <i className="fa-regular fa-copyright"></i>
            2020 Kasa All rights reserved
            </p>
    </footer>
)
}
export default Footer