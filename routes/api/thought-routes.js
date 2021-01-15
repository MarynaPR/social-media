const router = require('express').Router();
const { get } = require('http');
const {
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
    getAllThoughts,
    getThoughtById
} = require('../../controllers/thought-controller');

router.route('/').post(addThought).get(getAllThoughts);

router.route('/:thoughtId')get(getThoughtById).put(updateThought).delete(deleteThought);
router
    .route('/:thoughtId/:reactions')
    .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;