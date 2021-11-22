const User = require('../models/User')
const getUser = async function (req, res) {
    const user = await User.find().sort({ createdAt: -1 })
    res.json(user)
}
const postUser = async function (req, res) {
    const user = new User(req.body)
    try {
        const savedUser = await user.save()
        res.json(savedUser)
    }
    catch (err) {
        console.log(err)
    }
}
const getUniqueUser = async function (req, res) {
    const id = await req.params.id
    const user = await User.findById(id)
    if (user) {
        try {
            return res.json(user)
        }
        catch (err) {
            res.send(err)
        }

    }
}
const deleteUser = async function (req, res) {
    const id1 = await req.params.id
    const user = await User.findByIdAndRemove(id1)
    res.send(user)
}
module.exports = {
    getUser,
    postUser,
    getUniqueUser,
    deleteUser
}