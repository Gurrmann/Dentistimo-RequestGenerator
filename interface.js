const requestGenerator = require('./generator')
const prompt = require('prompt-sync')({sigint: true});
const menu = () => {

    let message = 'DENTISTIMO REQUEST GENERATOR \n'
    message += 'Press 1 to create your own requests \n'
    message += 'Press 2 to select from presets \n'
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
  
}

menu()