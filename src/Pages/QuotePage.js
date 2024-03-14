


 const QuotePage = ({int}) => {

const reviews = [['Anna H', '"I would higly \n recommend Billy to anyone looking for a well built bike, cared for with intention"'], ['Stanley J', '"I was really pleased with the service Billy provided. I\'ve used lots of other mechanics before and I\'ve rarely had such quality service, and for a really reasonable price... \n I will always be making the trip to Billy\'s from now on and would recommend Billy\'s Bike Exchange to anyone!"'], ['Steve M', '"Really friendly guy, well priced and clearly really passionate about his work... \n100% recommend"']]

const reviewer = reviews[int][0]
const review1 = reviews[int][1]
console.log(review1)
    return (
        <>
        <section className='page quotePage' >
            <p className="kalam-bold">{reviewer}</p>
            <p className="kalam-regular">{review1}</p>

        </section>
        </>
    )

}



export default QuotePage