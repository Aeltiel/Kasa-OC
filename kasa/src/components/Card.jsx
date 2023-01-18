import { Link } from "react-router-dom"
//création des cartes visibles dans la page Home avec des props en paramètre pour récupérer les donner lié à chaque carte
function Card({id, cover, title}) {
    return (
        <>
                <Link to={`/Logements/${id}`} className="Card">
                    <img className="Card__img" src={cover} alt='visuel du logement'/>
                    <p className="Card__Title">{title}</p>
                </Link>
        </>

    )
}
export default Card