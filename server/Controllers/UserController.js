const getAllUser = (req, res) => {
    res.send('Get all users');
}

const getDetailUser = (req, res) =>{
    res.send('Get detail user');
}

module.exports = {
    getAllUser,
    getDetailUser
};