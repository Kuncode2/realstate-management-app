// validation process making Scema  for user error(ex: string)
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});


const user = mongoose.model('user', userSchema);
// database restrictions

export default user;