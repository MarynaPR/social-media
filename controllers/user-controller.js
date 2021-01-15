const { User, Thought } = require('../models');

const userController = {
    //all users
    getAllUser(req, res) {
        User.find({})
            .populate({
                path: 'thoughts', select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    //1 user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate('thoughts')
            .populate('friends')
            .select('-__v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    //create
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },
    //update
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, { $set: req.body }, { runValidators: true, new: true })//returns new updated parameter
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'no user with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },
    //delete
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'no user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },
    //add friend
    addFriend(req, res) {
        User.findOneAndUpdate({ _id: params.id }, { $addToSet: { friends: req.params.friendId } }, { new: true })//returns new updated parameter
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'no user with this id!' });
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },
    //delete friend
    deleteFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true })//returns new updated parameter
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'no user with this id!' });
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },

};
module.exports = userController;