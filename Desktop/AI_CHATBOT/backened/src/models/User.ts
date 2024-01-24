import mongoose from "mongoose" ;
import { randomUUID } from "crypto";
const chatSchema =new mongoose.Schema({
    id: {
        type:String,
        default:randomUUID(),
    },
    role: {
        type:String,
        require: true,
    },
    content:{
        type:String,
        required:true,
    },
}) ;

// const chatSchema = new mongoose.Schema({

// })

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type: String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    chats:[chatSchema],
});


export default  mongoose.model("User",userSchema);