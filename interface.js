const prompt = require('prompt-sync')({sigint: true});
const menu = () => {
  let exit = false;

  while (!exit) {

    let input = prompt('');
    console.log(input)
    switch (input) {

      case '1':
        exit = true;
        break;
        
      

    }
  }
}
menu()