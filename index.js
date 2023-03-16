// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    let  firstTwoDrivers = drivers.slice(0,2);
    return firstTwoDrivers;
}

let returnLastTwoDrivers = function(drivers){
    let lastTwoDrivers = drivers.slice(-2);
    return lastTwoDrivers;
}

let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(times){

    return function multiplyFair(fare = 40) {
        fare *= times;
        return fare;
    }

}


function fareDoubler(fare){
    return fare *= 2;
}

function fareTripler(fare){
    return fare *= 3;
}

function selectDifferentDrivers(listOfDrivers, func){
    return func(listOfDrivers);
}

let newFair = createFareMultiplier(6);
console.log(newFair(400));

let drivers = ['Peter', 'James', 'John'];
console.log(selectingDrivers[1](drivers));

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
