import { bikesData } from './bikesData';
import { reviewsData } from './reviewsData';

let allData = [];
let sortedData = []

let longerArray = [];
let shorterArray = [];

(() => {
    if (bikesData.length > reviewsData.length || bikesData.length === reviewsData.length) {
        longerArray = bikesData;
        shorterArray = reviewsData
        return
    }
    if (bikesData.length < reviewsData.length) {
        longerArray = reviewsData;
        shorterArray = bikesData
        return
    }
}
)()

// Alternately populates allData from bikesData & reviewsData
function shuffle() {
    let i = 0
    for (const dataObject of longerArray) {
        allData.push(dataObject);
        allData.push(shorterArray[i]);
        i++
    }
    //  Removes any undefined values (created when one array is longer than the other)
    sortedData = allData.filter(Boolean)

}
shuffle()

export default sortedData

