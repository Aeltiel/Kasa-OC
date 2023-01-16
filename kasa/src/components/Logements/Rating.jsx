//composant pour afficher les étoiles qui font le score du logement
function Rating({ score}) {
    const stars = [];
    const colorStar = (<div className=" rateBox__color"><i className="fa-solid fa-star" ></i></div>);
    const greyStar = (<div className=" rateBox__grey"><i className="fa-solid fa-star" ></i></div>);
    const rate = parseInt(score);
    let totalStar = 5 - rate;
    
    for(let s = 0; s < rate; s++){
        stars.push(colorStar)
    }

    for(let gs = 0; gs < totalStar; gs++){
    stars.push(greyStar)
  }

    return (
        <div className="rateBox">
            {stars}
        </div>
    )
}
export default Rating