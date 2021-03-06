const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema(
    {
        members: {
            type: [ String ]
        }
    },
    { timestamps: true }
);

const Class = mongoose.model('Conversation', ConversationSchema);

module.exports = Class;
