import { Link } from 'react-router-dom'


function Error() {
    return (
        <div>
            <div className='Error'>
                <p className='Error__Oups'>404</p>
                <p className='Error__Oups--1'>
                    <span className='Error__Oups--2'>Oups! La page que </span> 
                    vous demandez n'existe pas</p>
            </div>
            <Link className='ErrorLink' to='/Kasa-OC/kasa'>Retourner sur la page d'accueil</Link>
        </div>
    )
}
export default Error