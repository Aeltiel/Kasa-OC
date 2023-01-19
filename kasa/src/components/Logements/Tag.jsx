//affichage de la liste des tag
//usage de props dans les paramètre de la fonction pour pouvoir mettre à jour le composant en focntion des données
function Tag ({tag}){
    return(
        <div className="tag">
            {tag}
        </div>
    )
}
export default Tag