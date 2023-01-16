import littleBanner from '../assets/littleBanner.png'

function BannerMobile() {
    return (
        <div className='bannerMobile'>
            <img className="bannerMobile__img" src={littleBanner} alt="paysage cotier avec quelques arbres" />
            <div className='bannerMobile__TitleBox'>
                <p className='bannerMobile__title'>Chez vous, partout et ailleurs</p>
            </div>
        </div>
    )
}
export default BannerMobile