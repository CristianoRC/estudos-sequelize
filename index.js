const userService = require('./service/userService');

userService.getAllUsers().then(users => console.log(users));