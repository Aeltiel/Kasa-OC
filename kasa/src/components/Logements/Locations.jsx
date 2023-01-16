// fonction pour le nom et la localisation du logement
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