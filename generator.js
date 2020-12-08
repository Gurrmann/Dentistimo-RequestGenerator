var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org')
const { setInterval } = require("timers");

let generateRequest = (requestData, requestid) => {

    let issuance = new Date()
    issuance = issuance.getTime();
    let userId = Math.floor(Math.random() * 1000000000)
    let dentistid = requestData.randomDentistry ? Math.floor(Math.random() * (4-1) + 1) : 4
    let dateString
    // Increments a set date with 30 minutes for each iteration, representing a timeslot
    
    if (requestData.incrementDate) {
        
        let minuteIncrementer = 30 * requestid
        let testDate = new Date(2022,0,1,0,0)
        let time = new Date(testDate.getTime() + 1000 * 60 * minuteIncrementer)
        
        
        let ISOformat = []  
        dateString = time.toISOString()
        ISOformat[0] = dateString.slice(0,10)
        ISOformat[1] = dateString.slice(11,16)
        dateString = ISOformat[0] + ' ' + ISOformat[1]

    }
     
    else {

        dateString = '2021-12-1 14:30'

    }
    // assigns a fixed amount of dentists to the dentistry
    let dentistNumber
    switch (dentistid) {
    
        case 1:
            dentistNumber = 2
            break;

        case 2:
            dentistNumber = 1
            break
        
        case 3:
            dentistNumber = 4
            break

        case 4:
            dentistNumber = 2
            break
        

    }

    //arbitrary number to not conflict with real requests,
    requestid += 1000000;
    let request = {
    
        userid: userId,
        requestid: requestid,
        dentistid: dentistid,
        issuance: issuance,
        time: dateString, 
        numberOfDentists: dentistNumber

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