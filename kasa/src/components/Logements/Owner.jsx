// composant pour le nom et l'image du propriétaire
function Owner({ host, image }) {
    return (
        <div className='LocaVue__owner'>
            <p className='LocaVue__owner--name'>{host}</p>
            <div className='LocaVue__owner--img'>
                <img src={image} alt='le propriétaire' />
            </div>
        </div>
    )
}
export default Owner
