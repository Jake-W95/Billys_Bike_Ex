


const QuotePage = ({ int }) => {

    const reviews = [
        ['Anna H', '"I would higly \n recommend Billy to anyone looking for a well built bike, cared for with intention"', 0], ['Stanley J', '"I was really pleased with the service Billy provided. I\'ve used lots of other mechanics before and I\'ve rarely had such quality service, and for a really reasonable price... \n I will always be making the trip to Billy\'s from now on and would recommend Billy\'s Bike Exchange to anyone!"', 1],
        ['Steve M', '"Really friendly guy, well priced and clearly really passionate about his work... \n100% recommend"', 0]
    ]

    const reviewer = reviews[int][0]
    const review1 = reviews[int][1]
    const fontSize = reviews[int][2] === 0 ? 'fa2' : 'fa1'
    return (
        <>
            <section className='quotePage' >
                    <p className="kalam-bold fa3">{reviewer}</p>
                    <p className={`kalam-regular ${fontSize}`} style={{ margin: '.5em' }}>{review1}</p>

            </section>
        </>
    )

}



export default QuotePage