import Banner from '../components/Banner'
import BannerMobile from '../components/BannerMobile'
import Card from '../components/Card'
import data from './data.json'
import { Link } from "react-router-dom"

//utilisation de map pour généré le composant card en fonction du nombre de données présentes
//Ne pas oublier les {} dans Link pour que cela fonctionne ainsi quand on clique sur la card
//on arrive bien à la page souhaité 
function Home() {
    return (
        <>
            <BannerMobile />
            <Banner />
            <div className='Home-container'>
                {data.map((house) => (
                    <Link key={house.id} to={`/Logements/${house.id}`}>
                        <Card
                            cover={house.cover}
                            title={house.title}
                        />
                    </Link>
                ))}

            </div>
        </>
    )
}

export default Home