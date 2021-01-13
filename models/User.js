const { Schema, model } = require('mongoose');

const UserSchema = new Schema({

    username: {
        type: String,
        unique: true,
        required: 'You need to provide a username!',
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // lowercase: true,
        required: 'Email address is required',
        // validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        // Must match a valid email address(look into Mongoose's matching validation)

        // const validator = require('validator');

        // validate: {
        //     validator: validator.isEmail,
        //     message: '{VALUE} is not a valid email',
        //     isAsync: false
        // }
    },

    thoughts: [],
    // Array of _id values referencing the Thought model
    friends: [
        {
            // Array of _id values referencing the User model(self - reference)
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],

    //Schema Settings
    UserSchema.virtual('friendCount').get(function () {
        return this.friends.reduce(
            (total, friend) => total + friend.
    )
        //will finish up on virtual later
    })
    // Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
})

const User = model('User', UserSchema);
module.exports = User;