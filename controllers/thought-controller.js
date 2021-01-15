const { Thought, User } = require('../models');
const thoughtController = {
    //create a thought
    addThought({ params, body }, res) {
        console.log(body);
        Thought.create(req.body)
            .then(({ _id }) => {
                console.log(_id)
                return User.findOneAndUpdate(
                    { _id: params.UserId },
                    { $push: { thoughts: _id } },
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
    removeThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
            .then(deleteThought => {
                if (!deleteThought) {
                    return res.status(404).json({ message: 'no thought with this id' })
                } return User.findOneAndUpdate(
                    { _id: params.UserId },
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
            { _id: params.thoughtId },
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
    getAllThoughts() { },
    getThoughtById() { },

    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughttId },
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
    removeReaction(req, res) {
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