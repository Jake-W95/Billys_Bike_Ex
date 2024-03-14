import heroImage from '../../Assets/Images/Images/A2.png'
const Landing = ({ scrollTo, servicesRef, contactRef }) => {


    return (
        <>
            <section className="page">
                <img
                    src={heroImage}
                    alt='hero'
                    className='heroImage' />
                <article  className='textContainer'>
                    <p className='kalam-regular fa1'>
                        Here at <span className='highlight'>Billy's Bike Exchange</span>, myself and my mechanics always strive to get your bike rolling <span className='highlight'>perfectly</span>, no matter the <span className='highlight'>condition, value or style</span>.
                        <br></br>
                        Give us a call or fill out the contact form to let us know how we can help! <br />
                        Just head over to the <span className='highlight'>contact page</span>.
                    </p>
                </article>
                <div className='nav'>

                    <u
                        className='kalam-bold fa2'
                        onClick={() => scrollTo(servicesRef)}>Services</u>

                    <u
                        className='kalam-bold fa2'

                        onClick={() => { scrollTo(contactRef) }}>Contact</u>

                    <u
                        className='kalam-bold fa2'

                        onClick={() => alert('Coming soon')}>Testimony</u>
                    <u
                        className='kalam-bold fa2'

                        onClick={() => alert('Coming soon')}>Gallery</u>
                </div>
            </section>
        </>
    )
}

export default Landing