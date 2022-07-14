const mongoose = require("mongoose")

const TwitterSchema = new mongoose.Schema({
    user_id:{type:mongoose.Schema.Types.ObjectId,
             ref:"user",
              required:true},
    content:{type:String,required:true}
},{
    timestamps:true
})

const Followers=mongoose.model("follower",TwitterSchema)