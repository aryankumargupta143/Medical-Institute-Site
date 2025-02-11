import mongoose from 'mongoose';
import validator from 'validator';

const messageSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3, "First Name Must Contain at least 3 characters!"]
    },
    lastName:{
        type: String,
        required: true,
        minLength: [3, "Last Name Must Contain at least 3 characters!"]
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please Provide a valid email!"]
    },
    phone:{
        type: String,
        required: true,
        minLength: [10, "Phone number contain 10 digits!"],
        maxLength: [10, "Phone number contain 10 digits!"]
    },
    message:{
        type: String,
        required: true,
        minLength: [10, "Message Must contain at least 10 characters!"]
    },
});

export const Message = mongoose.model("Message", messageSchema);