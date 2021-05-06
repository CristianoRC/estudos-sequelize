const { User } = require('../models')

const getAllUsers = async () => {
    const users = await User.findAll();
    return users.map(user => user.dataValues);
}

const createUser = async (fullname, email) => {
    await User.create({ fullname, email })
}

const deleteUser = async (email) => {
    await User.destroy({ where: { email } });
}

module.exports = {
    getAllUsers,
    createUser,
    deleteUser
}