//var mqtt = require('mqtt');
//var client = mqtt.connect('mqtt://test.mosquitto.org')

const { setInterval } = require("timers");

let generateRequest = (random, amount) => {

    var date = new Date()
    issuance = date.getTime();
    let userId = Math.floor(Math.random() * 1000000000)
    let dentistid = random ? Math.floor(Math.random() * 4) : 4
    let time
    let timeIncrementer = 30
    if (random) {
        for (i = 0; i < amount; i++) {
            time = new Date(date.getTime() + 1000 * 60 * timeIncrementer)
           // console.log(timeIncrementer)
           // console.log(i)
            timeIncrementer += 30
        }
    } else {
        time = '2021-12-1 14:30'
    }
    
    amount += 2000;
    let request = {

        userid: userId,
        requestid: amount,
        dentistid: dentistid,
        issuance: issuance,
        time: time, 

    }
    
    return request
}

let dateIncrementer = (amount) => {

    time = new Date()

        while (i < amount) {

        }

}

let submitRequest = (random, amount, time) => {

        time = time * 1000 //converts seconds in to milliseconds
        let interval = time / amount

        let i = 1
        let requests = setInterval(() => {
            if(i > amount - 1) {
              clearInterval(requests)
         }
         console.log(generateRequest(random,i))
         console.log(i)
          i++
         },interval);
        
}
submitRequest(true,'10','10')


