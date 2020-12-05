var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org')

generateRequest = () => {
    let request = {

    }
   client.publish('BookingRequest', JSON.stringify(request))
}
generateRequest()