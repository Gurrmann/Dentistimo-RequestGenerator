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
  console.log('poop')
}

var selectPresets = () => {
  console.log('tja')
}

menu()