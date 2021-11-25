
function returnFirstTwoDrivers(driverArray) {
    const firstTwo = driverArray.slice(0, 2)
    return firstTwo;
}

function returnLastTwoDrivers(driverArray) {
    const lastTwo = driverArray.slice(-2)
    return lastTwo;
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return (fare) => multiplier * fare;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
}
