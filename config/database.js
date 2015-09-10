/**
 * Created by king on 2015/9/10.
 */

module.exports = function(app, mongoose){
    var config = app.config;
    mongoose.connect(config.server + config.database);
}