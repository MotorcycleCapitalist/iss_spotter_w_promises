const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation().then((passTimes) => {
    printPassTimes(passTimes)
})


const  printPassTimes  = ((passTimes) => {console.log(passTimes)})
// fetchMyIP().then(body => {
//     const ip = JSON.parse(body).ip
//     console.log(ip);

//     fetchCoordsByIp(ip).then(body => console.log(body))
// })

// index2.js

