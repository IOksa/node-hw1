const contacts = require("./contacts");
const argv = require('yargs').argv;

//contacts.listContacts().then(console.log).catch(console.error);
//contacts.getContactById('drsAJ4SHPYqZeG-83QTVW').then(console.log).catch(console.error);
//contacts.addContact('testName', 'test@gmail.com', '(050)456-78-90').then(console.log).catch(console.error);
//contacts.removeContact('100dca91-0104-46a6-928e-be1f13e52200').then(console.log).catch(console.error);

const invokeAction = async ({ action, id, name, email, phone })=>{
    switch (action) {
      case 'list':
        const allContacts = await contacts.listContacts();
        console.table(allContacts);
        break;
  
      case 'get':
        const oneContact = await contacts.getContactById(id);
        console.log(oneContact);
        break;
  
      case 'add':
        const newContact = await contacts.addContact(name, email, phone);
        console.log(newContact);
        break;
  
      case 'remove':
        const removeContact = await contacts.removeContact(id);
        console.log(removeContact);
        break;
  
      default:
        console.warn('\x1B[31m Unknown action type!');
    }
  }
  
  invokeAction(argv);
