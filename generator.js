//var mqtt = require('mqtt');
//var client = mqtt.connect('mqtt://test.mosquitto.org')
const { setInterval } = require("timers");

let generateRequest = (random, amount) => {

    var issuance = new Date()
    var testDate = new Date(2022,0,1,0,0)
    issuance = issuance.getTime();
    let userId = Math.floor(Math.random() * 1000000000)
    let dentistid = random ? Math.floor(Math.random() * 4) : 4
    let time
    let format = []
    let timeIncrementer = 30
    let dateString
    if (random) {
        for (i = 0; i < amount; i++) {
            time = new Date(testDate.getTime() + 1000 * 60 * timeIncrementer)
            timeIncrementer += 30
            dateString = time.toISOString()
            format[0] = dateString.slice(0,10)
            format[1] = dateString.slice(11,16)
            dateString = format[0] + ' ' + format[1]
            //console.log(dateString)
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
        time: dateString, 

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
        // console.log(i)
          i++
         },interval);
        
}
submitRequest(true,'100','10')


