/**
 * Created by king on 2015/8/24.
 */
var User = require('../models/user');

User.checkUser('king','123456', function(err, result){
   if(err){
       console.log(err);
       throw err;
   }
   console.log(result);
});
