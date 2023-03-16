const returnFirstTwoDrivers = (driversArray) => {
return driversArray.slice(0,2)
}
const  returnLastTwoDrivers = (driversArray) => {
    return driversArray.slice(2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier (multiplier) {   
    return function(fare){ 
        let product = fare*multiplier
        return product
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers (driversArray, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(driversArray)
}

