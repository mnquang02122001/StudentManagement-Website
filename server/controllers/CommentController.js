const { nanoid } = require('nanoid');

const Comment = require('../models/Comment');
const Post = require('../models/Post');

const result = {
    message: 'A message from server',
    success: false
};

function getResult(status, msg = 'Something went wrong') {
    result.message = msg;
    result.success = status;
    return result;
}

module.exports.createComment = async function(req, res) {
    const newComment = new Comment({
        commentId: nanoid(),
        postId: req.params.post_id,
        ownerId: req.params.user_id,
        content: req.body.content
    });

    await newComment.save().catch((err) => {
        return res.json(getResult(false, err));
    });

    const foundPost = await Post.findById(req.params.post_id).catch((err) => {
        return res.json(getResult(false, err));
    });

    if (foundPost) {
        foundPost.commentIds.push(newComment.commentId);

        await foundPost.save().catch((err) => {
            return res.json(false, err);
        });

        return res.json(getResult(true, 'OK'));
    }
};

module.exports.updateComment = async function(req, res) {
    const foundPost = await Post.findById(req.params.post_id).catch((err) => {
        return res.json(getResult(false, err));
    });

    if (foundPost) {
        const foundComment = await Comment.findOne({ commentId: req.params.comment_id }).catch((err) => {
            return res.json(false, err);
        });

        if (foundComment) {
            foundComment.content = req.body.content;

            await foundComment.save().catch((err) => {
                return res.json(getResult(false, err));
            });

            return res.json(getResult(true, 'OK'));
        }
    } else {
        return res.json(true, 'No post found');
    }
};

module.exports.deleteComment = async function(req, res) {
    await Comment.findOneAndRemove({ commentId: req.params.comment_id }).catch((err) => {
        return res.json(getResult(false, err));
    });

    return res.json(getResult(true, 'OK'));
};
