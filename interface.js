const prompt = require('prompt-sync')({sigint: true});
const menu = () => {
  let exit = false;

  while (!exit) {

    let message = 'DENTISTIMO REQUEST GENERATOR \n'
    message += 'Press 0 to exit!'
    console.log(message)

    let input = prompt('');
    switch (input) {

      case '0':
        exit = true;
        break;
        
      

    }
  }
}
menu()