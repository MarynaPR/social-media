const { Thought, User } = require('../models');
const thoughtController = {
    //create a thought
    addThought(req, res) {
        Thought.create(req.body)
            .then(({ dbThoughtData }) => {
                return User.findOneAndUpdate(
                    { _id: params.body.userId },
                    { $push: { thoughts: dbThoughtData._id } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'no user with this id' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },//delete thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((deleteThought) => {
                if (!deleteThought) {
                    return res.status(404).json({ message: 'no thought with this id' })
                }
                return User.findOneAndUpdate(
                    { thoughts: req.params.thoughtId },
                    { $pull: { thoughts: params.thoughtId } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'no user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    return res.status(404).json({ message: 'no thought with this id' })
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err));
    },
    getAllThoughts(req, res) {
        Thought.find({})
            .then((dbThoughtData) => {
                res.json(dbThoughtData)
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    getThoughtById(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    return res.status(404).json({ message: 'no thought with this id' });
                }
                res.json(dbThoughtData)
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    return res.status(404).json({ message: 'no thought with this id' });
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err));

    },
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        )
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    return res.status(404).json({ message: 'No thought with this id!' });
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err));
    },

};

module.exports = thoughtController;