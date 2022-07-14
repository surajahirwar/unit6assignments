const mongoose=require("mongoose")

const FollowSchema=new mongoose.Schema({
       followed_id:{type:String,required:true},
       user_id:{
           type:mongoose.Schema.Types.ObjectId,
           ref:"user",
           required:true
       }


},{
    timestamps:true
})

const Followers=mongoose.model("follower",FollowSchema)