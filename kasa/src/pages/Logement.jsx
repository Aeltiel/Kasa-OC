import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import data from './data.json'
import Error from './Error';
import Footer from '../components/Footer'
import Locations from '../components/Logements/Locations';
import Owner from '../components/Logements/Owner'
import SlideShow from '../components/Logements/SlideShow';
import Tag from '../components/Logements/Tag';
import BarreDeroulante from '../components/BarreDeroulante'
import Rating from '../components/Logements/Rating';

function Logement() {
    const [logement, setLogement] = useState(null);
    const [chargement, setChargement] = useState(true)
    const [error, setError] = useState(false)
    let params = useParams();

    useEffect(() => {
        /* setLogement(data.filter(logement => logement.id === params.id)[0]); */
        var monLogement = data.filter(logement => logement.id === params.id)[0]
        if (typeof monLogement === "object") {
            setLogement(monLogement)
            setChargement(false)
        }
        if (monLogement === undefined) {
            setChargement(false)
            setError(true)
        }
    }, []);

    if (chargement) {
        return <div>Chargement en cours ...</div>
    }
    else {
        if (error) {
            return <Error />
        }
        else {
            return (
                <div key={logement.id}>
                    <SlideShow
                        picture={logement.pictures}
                    />
                    <div className='locaContainer'>
                        <Locations
                            title={logement.title}
                            location={logement.location}
                        />
                        <Owner
                            host={logement.host.name}
                            image={logement.host.picture} />

                        <div className='locaContainer__items' >
                            <div className='locaContainer__items--tag'>
                                {logement.tags.map((tag) => (
                                    <Tag tag={tag} />
                                ))}
                            </div>
                            <div className='locaContainer__items--rate'>
                                <Rating score={logement.rating} />
                            </div>
                        </div>
                    </div>
                    <div className='locaContainerInfos' >
                        <div className='locaContainerInfos--1' >
                            <BarreDeroulante
                                quality="Description"
                                description={logement.description}
                            />
                        </div>
                        <div className='locaContainerInfos--2' >
                            <BarreDeroulante
                                quality="Équipments"
                                description={logement.equipments}
                            />
                        </div>
                    </div>
                    <Footer />
                </div>)
        }
    }
}
export default Logement
