import mongoose from 'mongoose';
import userModel from './Users';
import groupModel from './Groups';
const { Schema } = mongoose;


const clubSchema = new Schema({
    name: String,
    coaches: [{type:userModel}],
    students: [{type:userModel}],
    groups: [{type:groupModel}],
},
{ timestamps: true }
);

const clubModel = mongoose.model('clubs',userSchema)

export default clubModel