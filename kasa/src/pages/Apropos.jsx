import Footer from "../components/Footer"
import BarreDeroulante from "../components/BarreDeroulante"
import Quality from "../quality.json"
import Apropos from "../assets/imageApropos.png"
import AProposMobile from "../assets/imageAproposMobile.png"


function APropos() {
    return(
        <>
        <img className = "imgMobile" src={AProposMobile} alt="paysage de montagne"/>
        <img className = "imgDesktop" src={Apropos} alt="paysage de montagne"/>
        <div className="qualityContainer">
            {Quality.map((element) => (
                <BarreDeroulante
                    key={element.id}
                    quality={element.name}
                    description={element.description}
                />
            ))}
        </div>
        <Footer />
    </>
    )    
}
export default APropos