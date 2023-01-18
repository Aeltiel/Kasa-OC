import { useState } from "react"

//carroussel pour la page logement
function SlideShow({ picture }) {
    const [imgTab, setImg] = useState(picture)
    const [imgIndex, setImgIndex] = useState(0)

    //pour augmenter l'index du tableau contenant les images et ainsi passer à l'image suivantes
    //et quand nous sommes au dernier indice du tableau (4) on revient à l'indice 0
    function carrouselRight() {
        if (imgIndex < imgTab.length - 1) {
            setImgIndex(imgIndex + 1)
        }
        else {
            setImgIndex(0)
        }
    }
    //pour diminuer l'index du tableau et ainsi revenir à l'image précédente
    //et quand on est au 1er indice (0), on passe au dernier
    function carrouselLeft() {
        if (imgIndex > 0) {
            setImgIndex(imgIndex - 1)
        }
        else {
            setImgIndex(imgTab.length - 1)
        }
    }

    return (
        <>
            <div className="carrousel">
                {imgTab.length <= 1 ? <div></div> : <button className="carrousel__Left" onClick={(e) => carrouselLeft()}><i className="fa-solid fa-chevron-left"></i></button>}
                <div className="carrousel__image">
                    <img src={imgTab[imgIndex]} alt="intérieur de la location" />
                    {imgTab.length <= 1 ? <div></div> :<p className="carrousel__image--counter">{imgIndex + 1}/{imgTab.length}</p>}
                </div>
                {imgTab.length <= 1 ? <div></div> :<button className="carrousel__Right" onClick={(e) => carrouselRight()}><i className="fa-solid fa-chevron-right"></i></button>}
            </div>
        </>
    )
}
export default SlideShow