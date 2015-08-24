var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var UserSchema = new Schema({
    username: String,
    password: String
});

/**
 * chek user by username and password
 * @param username
 * @param password
 * @param cb
 * @returns {Query}
 */
UserSchema.statics.checkUser = function(username, password,cb){
    return this.find({username: username, password:password}).count(cb);
}


module.exports = mongoose.model('users', UserSchema);
