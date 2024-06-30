const userModel = require('../Models/UserModel');

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        await userModel.create({
            username,
            email,
            password,
            role: 'regular'
        })
        return res.status(200).send('register user success')

    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    register: register
};