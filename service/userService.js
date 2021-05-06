const { User } = require('../models')

const getAllUsers = async () => {
    const users = await User.findAll();
    return users.map(user => user.dataValues);
}

module.exports = {
    getAllUsers
}