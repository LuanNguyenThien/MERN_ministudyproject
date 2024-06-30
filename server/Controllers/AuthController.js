const userModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        await userModel.create({
            username,
            email,
            password: bcrypt.hashSync(password, 10),
            role: 'regular'
        })
        return res.status(200).send('register user success')

    } catch (error) {
        console.error(error)
        if(error.code === 11000) {
            return res.status(400).json({error: 'Username or email already exists'});
        } else {
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }
}

module.exports = {
    register: register
};