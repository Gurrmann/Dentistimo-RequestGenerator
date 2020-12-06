//var mqtt = require('mqtt');
//var client = mqtt.connect('mqtt://test.mosquitto.org')

const { setInterval } = require("timers");

let generateRequest = (random, requestid) => {

    var issuance = new Date()
    issuance = issuance.getTime();
    let userId = Math.floor(Math.random() * 1000000000)
    requestid += 2000;
    let dentistid = random ? Math.floor(Math.random() * 4) : 4
    let time = '1234-12-1 14:30'
    
    let request = {

        userid: userId,
        requestid: requestid,
        dentistid: dentistid,
        issuance: issuance,
        time: time, 

    }
  // client.publish('BookingRequest', JSON.stringify(request))
    return request
}

let submitRequest = (random, amount) => {

        let i = 0
        let interval = setInterval(() => {
            if(i > amount - 1) {
              clearInterval(interval)
         }
         console.log(generateRequest(random,i))
         console.log(i)
          i++
         },1000);
        
}
submitRequest(false,10)


