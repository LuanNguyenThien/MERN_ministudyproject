const userModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({role: 'regular', email})
        if (!user) {
            return res.status(400).json({error: 'User not found'});
        }
        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({error: 'Password is incorrect'});
        }
        const jwtToken = jwt.sign({
            _id: user._id,
            username: user.username,
            role: user.role,
            }, process.env.SECRET_JWT, {expiresIn: '1h'}
        )
        return res.status(200).json({message: 'Login success', accessToken: jwtToken});
    }
    catch (error) {
        console.error(error)
        return res.status(500).json({error: 'Internal Server Error'});
    }
}

module.exports = {
    register: register,
    login: login
};