
//création des cartes visibles dans la page Home avec des props en paramètre pour récupérer les donner lié à chaque carte
function Card({id, cover, title}) {
    return (
        <>
                <div className="Card">
                    <img className="Card__img" src={cover} alt='visuel du logement'/>
                    <p className="Card__Title">{title}</p>
                </div>
        </>

    )
}
export default Card