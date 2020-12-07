var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org')
const { setInterval } = require("timers");

let generateRequest = (requestData, requestid) => {

    var issuance = new Date()
    issuance = issuance.getTime();
    let userId = Math.floor(Math.random() * 1000000000)
    let dentistid = requestData.randomDentistry ? Math.floor(Math.random() * 4) : 4
    
    // Increments a set date with 30 minutes for each iteration, representing a timeslot
    var testDate = new Date(2022,0,1,0,0)
    let time
    let format = []
    let minuteIncrementer = 30
    let dateString

    if (requestData.incrementDate) {

        for (i = 0; i < requestid; i++) {

            time = new Date(testDate.getTime() + 1000 * 60 * minuteIncrementer)
            minuteIncrementer += 30
            dateString = time.toISOString()
            format[0] = dateString.slice(0,10)
            format[1] = dateString.slice(11,16)
            dateString = format[0] + ' ' + format[1]
        }

    }
     
    else {

        dateString = '2021-12-1 14:30'

    }
    
    //arbitrary number to not conflict with real requests,
    requestid += 1000000;
    let request = {

        userid: userId,
        requestid: requestid,
        dentistid: dentistid,
        issuance: issuance,
        time: dateString, 

    }
    
    return request
}

let submitRequest = (requestData) => {

        requestData.time = requestData.time * 1000 //converts seconds in to milliseconds
        let interval = requestData.time / requestData.amount

        let i = 1
        let requests = setInterval(() => {
            if(i > requestData.amount - 1) {
              clearInterval(requests)
         }

            let request = generateRequest(requestData, i)
            client.publish('bookingRequest', JSON.stringify(request))
            console.log(request)
            i++
        
        },interval);
        
}


module.exports.submitRequest = submitRequest