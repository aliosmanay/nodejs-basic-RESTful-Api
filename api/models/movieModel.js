var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var movieSchema= new Schema({
    movieName: {
        type:String , required:'Cannot be empty'
    },

    movieDirector:{
        type:String , required:'Cannot be empty'
    },
    date: {
        type:Date   , default:Date.now
    }



});


module.exports=mongoose.model("Movie",movieSchema);
