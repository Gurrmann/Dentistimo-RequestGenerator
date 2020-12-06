const { DEFAULT_ECDH_CURVE } = require('tls');
const requestGenerator = require('./generator')
const prompt = require('prompt-sync')({sigint: true});
const menu = () => {

    let message = 'DENTISTIMO REQUEST GENERATOR \n'
    message += 'Press 1 to create your own requests \n'
    message += 'Press 2 to select from presets'
    console.log(message)
    let input = prompt()
    
    switch (input) {

      case '1':
        createRequests()
        break;
      case '2':
        selectPresets()
        break;
      default:
        console.log('Select a valid option \n')
        menu()
        break;

    }


}

var createRequests = () => {

  console.log('How many requests do you want to send?')
  let amount = prompt('')
  console.log('In what amount of time? (seconds)')
  let time = prompt('')
  console.log('Everything to the same dentist? (y/n)')
  let dentistry = prompt('')
  let randomDentistry
  if (dentistry === 'y' || dentistry === 'Y') {
    randomDentistry = false
  }
  else {
     randomDentistry = true
  }
  console.log('Increment the date for the requests? (otherwise all requests will use same date (y/n)')
  let date = prompt('')
  let incrementDate
  if (date === 'y' || date === 'Y') {
    incrementDate = true
  } 
  else {
    incrementDate = false
  }

  requestGenerator.submitRequest(randomDentistry,incrementDate,amount,time)
   
}

var selectPresets = () => {

  let message = 'Press 1 to send 100 requests in 10 seconds with indentical data\n'
  message += 'Press 2 to send 100 requests in 10 seconds to different dentists with identical date\n'
  message += 'Press 3 to send 100 requests in 10 seconds to the same dentist with unique dates\n'
  message += 'Press 4 to send 100 requests in 10 seconds to different dentists with unique dates'

  console.log(message)
  let input = prompt('')

  switch (input) {

      case '1':
        requestGenerator.submitRequest(false,false,100,10)
        break;
      case '2':
        requestGenerator.submitRequest(true,false,100,10)
        break;
      case '3':
        requestGenerator.submitRequest(false,true,100,10)
        break;
      case '4':
        requestGenerator.submitRequest(true,true,100,10)
        break;
      default:
        console.log('Please select a valid option\n')
        selectPresets()
  }
  
}
menu()