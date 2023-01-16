import banner from '../assets/Banner.png'

function Banner() {
    return (
        <div className='banner'>
            <img className="banner__img" src={banner} alt="paysage cotier avec quelques arbres" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}
export default Banner