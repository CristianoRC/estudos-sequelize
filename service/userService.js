const { User } = require('../models')

const getAllUsers = async () => {
    const users = await User.findAll();
    return users.map(user => user.dataValues);
}

const createUser = async (fullname, email) => {
    await User.create({ fullname, email })
}

module.exports = {
    getAllUsers,
    createUser
}