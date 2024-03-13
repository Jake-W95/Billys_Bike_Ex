import './Landing.css'
import heroImage from '../../Assets/Images/Images/A2.png'
const Landing = ({ scrollTo, servicesRef, contactRef }) => {

    console.log(servicesRef)

    return (
        <>
            <section className="page">
                <img
                    src={heroImage}
                    alt='hero'
                    style={{ width: '100vw' }} />
                <div className='nav'>
                    <p
                        className='kalam-bold '
                        style={{ fontSize: '180%' }}
                        onClick={() => scrollTo(servicesRef)}
                    >
                        <u>Services</u>
                    </p>
                    <p
                        className='kalam-bold '
                        style={{ fontSize: '180%' }}
                        onClick={() => { scrollTo(contactRef) }}
                    >
                        <u>Contact</u>
                    </p>
                    <p
                        className='kalam-bold '
                        style={{ fontSize: '180%' }}
                        onClick={() => alert('Coming soon')}
                    >
                        <u>Testimony</u>
                    </p>
                    <p
                        className='kalam-bold '
                        style={{ fontSize: '180%' }}
                        onClick={() => alert('Coming soon')}
                    >
                        <u>Gallery</u>
                    </p>
                </div>
                <article>
                    <p className='kalam-regular' style={{ fontSize: '110%', marginTop: 0 }}>
                        Here at <span className='highlight'>Billy's Bike Workshop</span>, myself and my mechanics will always strive to get your bike rolling <span className='highlight'>perfectly</span>, no matter the <span className='highlight'>condition, value or style</span>.
                        <br></br>
                        Give us a call or fill out the contact form to let us know how we can help! <br />
                        Just head over to the <span className='highlight'>contact page</span>.
                    </p>
                </article>
            </section>
        </>
    )
}

export default Landing