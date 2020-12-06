var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org')
const { setInterval } = require("timers");

let generateRequest = (randomDenistry, randomDate, amount) => {

    var issuance = new Date()
    issuance = issuance.getTime();
    let userId = Math.floor(Math.random() * 1000000000)
    let dentistid = randomDenistry ? Math.floor(Math.random() * 4) : 4
    
    // Increments a set date with 30 minutes for each iteration, representing a timeslot
    var testDate = new Date(2022,0,1,0,0)
    let time
    let format = []
    let minuteIncrementer = 30
    let dateString
    if (randomDate) {
        for (i = 0; i < amount; i++) {
            time = new Date(testDate.getTime() + 1000 * 60 * minuteIncrementer)
            minuteIncrementer += 30
            dateString = time.toISOString()
            format[0] = dateString.slice(0,10)
            format[1] = dateString.slice(11,16)
            dateString = format[0] + ' ' + format[1]
        }
    } else {
        dateString = '2021-12-1 14:30'
    }
    
    //arbitrary number to not conflict with real requests,
    amount += 1000000;
    let request = {

        userid: userId,
        requestid: amount,
        dentistid: dentistid,
        issuance: issuance,
        time: dateString, 

    }
    
    return request
}

let submitRequest = (randomDenistry, randomDate, amount, time) => {

        time = time * 1000 //converts seconds in to milliseconds
        let interval = time / amount

        let i = 1
        let requests = setInterval(() => {
            if(i > amount - 1) {
              clearInterval(requests)
         }
        let request = generateRequest(randomDenistry, randomDate, i)
        client.publish('bookingRequest', JSON.stringify(request))
        console.log(request)
          i++
         },interval);
        
}


module.exports.submitRequest = submitRequest