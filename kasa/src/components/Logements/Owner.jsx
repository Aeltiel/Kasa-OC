// composant pour le nom et l'image du propriétaire
function Owner({host, image}){
    return(
        <div className='LocaVue__owner'>
                        <p className='LocaVue__owner--name'>{host}</p>
                        <img className='LocaVue__owner--img' src={image} alt='le propriétaire' />
                    </div>
    )
}
export default Owner
