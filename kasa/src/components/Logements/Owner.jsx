// composant pour le nom et l'image du propriétaire
//usage de props dans les paramètre de la fonction pour pouvoir mettre à jour le composant en focntion des données
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
