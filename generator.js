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
    return request
}

let submitRequest = (random, amount, time) => {

        time = time * 1000 //converts seconds in to milliseconds
        let interval = time / amount

        let i = 0
        let requests = setInterval(() => {
            if(i > amount - 1) {
              clearInterval(requests)
         }
         console.log(generateRequest(random,i))
         console.log(i)
          i++
         },interval);
        
}
submitRequest(true,100,10)


