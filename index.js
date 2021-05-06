const Chance = require('chance');
const chance = new Chance();
const userService = require('./service/userService');

// userService.getAllUsers().then(users => console.log(users));
// userService.createUser(chance.name(), chance.email()).then(() => console.log("Usuário criado com sucesso"));
// userService.deleteUser("doz@karwovdi.ck").then(() => console.log("Usuário deletado com sucesso"));
userService.updateName(5, chance.name()).then(() => console.log("Nome alterado com sucesso"));
