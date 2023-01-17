import { useState } from "react"
//fonction pour les barres défilantes qui s'active ou non en fonction du clique
//usage de props pour avoir un composant modulable à souhait
function Collapse({ quality, description }) {
    const [view, setview] = useState(false)
    const buttonview = () => {
        setview(!view) // déclenche l'affichage du texte si c'est à true
    }

    const descriptionActive = () => {
        if (typeof description === 'object') {
            return (
                <ul>
                    {description.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            )
        } else {
            return description
        }
    }


    return (
        <div className="rollingBar">
            <div className="rollingBar__title">
                <p className="rollingBar__title--text">{quality}</p>
                <button className="rollingBar__title--btn2" onClick={buttonview}><i className="fa-sharp fa-solid fa-chevron-down"></i></button>
                <button className={view ? "rollingBar__title--activeBtn1" : "rollingBar__title--btn1"} onClick={buttonview}>
                    <i className="fa-sharp fa-solid fa-chevron-up"></i>
                </button>

            </div>
            {view ? <div className="rollingBar__descrptionActive">{descriptionActive()}</div> : <div></div>}
            <div></div>
        </div>
    )

}
export default Collapse