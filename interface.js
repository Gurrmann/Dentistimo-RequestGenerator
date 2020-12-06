const { generate } = require('mqtt-packet');

const prompt = require('prompt-sync')({sigint: true});
const menu = () => {
  let exit = false;

  while (!exit) {

    let message = 'DENTISTIMO REQUEST GENERATOR \n'
    message += 'Press 1 to send 100 of the same requests to the same dentist \n'
    message += 'Press 2 to send 100 of the same requets to multiple dentists \n'
    message += 'Press 0 to exit!'
    console.log(message)

    let input = prompt('');
    switch (input) {

      case '1':
        requestGenerator.submitRequest(false, 100)
        break;
      case '2':
        requestGenerator.submitRequest(true, 100)
        break;
      case '0':
        exit = true;
        break;
        
      

    }
  }
}
menu()