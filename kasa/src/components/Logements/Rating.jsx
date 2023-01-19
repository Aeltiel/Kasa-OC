//composant pour afficher les étoiles qui font le score du logement
//ajoute d'étoiles de couleur dans un tableau en fonction du rate et ensuite affichage du tableau dans le DOM
function Rating({ score}) {
    const stars = [];
    const colorStar = (r) => (<div key={r} className=" rateBox__color"><i className="fa-solid fa-star" ></i></div>);
    const greyStar = (r) => (<div key={r + rate} className=" rateBox__grey"><i className="fa-solid fa-star" ></i></div>);
    const rate = parseInt(score);
    let totalStar = 5 - rate;
    
    //ajout d'étoiles de couleurs en fonction du rate
    for(let s = 0; s < rate; s++){
        stars.push(colorStar(s))
    }

    // sir le rate est inférieur à la note maximale (5) on ajoute des étoiles grises
    for(let gs = 0; gs < totalStar; gs++){
    stars.push(greyStar(gs))
  }

    return (
        <div className="rateBox">
            {stars}
        </div>
    )
}
export default Rating