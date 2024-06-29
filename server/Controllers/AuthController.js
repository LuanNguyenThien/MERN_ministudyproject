const register = (req, res) => {
    return res.status(200).send( 'Register successful' );
}

module.exports = {
    register: register
};