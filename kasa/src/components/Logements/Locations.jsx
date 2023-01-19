// fonction pour le nom et la localisation du logement
//usage de props dans les paramètre de la fonction pour pouvoir mettre à jour le composant en focntion des données
export default function  Locations ({title, location}){
    return (
        <div>
                <div className='LocaVue'>
                    <h1 className='LocaVue__title'>{title}</h1>
                    <p className='LocaVue__city'>{location}</p>
                </div>
        </div>
    )
}