const requestGenerator = require('./generator')
const prompt = require('prompt-sync')({sigint: true});

let requestData = {
  amount: 100,
  time: 10,
  randomDentistry: false,
  incrementDate: false,
}

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
  requestData.amount = prompt('')
 
  console.log('In what amount of time? (seconds)')
  requestData.time = prompt('')
 
  console.log('Everything to the same dentist? (y/n)')
  let dentistry = prompt('')
  
  if (dentistry === 'y' || dentistry === 'Y') {
    requestData.randomDentistry = false
  }
  else {
     requestData.randomDentistry = true
  }
 
  console.log('Increment the date for the requests? (otherwise all requests will use same date (y/n)')
  let date = prompt('')
 
  if (date === 'y' || date === 'Y') {
    requestData.incrementDate = true
  } 
  else {
    requestData.incrementDate = false
  }

  requestGenerator.submitRequest(requestData)
   
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
        requestGenerator.submitRequest(requestData)
        break;
    
      case '2':
        requestData.randomDentistry = true
        requestGenerator.submitRequest(requestData)
        break;
     
     case '3':
        requestData.incrementDate = true
        requestGenerator.submitRequest(requestData)
        break;
     
     case '4':
        requestData.incrementDate = true
        requestData.randomDentistry = true
        requestGenerator.submitRequest(requestData)
        break;
     
     default:
        console.log('Please select a valid option\n')
        selectPresets()
  }
  
}
menu()