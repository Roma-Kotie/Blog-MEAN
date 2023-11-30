const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true},
  photo: { type: String, required: true },
  text: { type: String, required: true },
  author: { type: String, required: true},
  date: { type: String, required: true },

});


const Post = mongoose.model('post', postSchema);

module.exports.addPost = function(newPost, callback) {
  newPost.save(callback)
};
