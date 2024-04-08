import mongoose from 'mongoose';
const { Schema } = mongoose;


const skillSchema = new Schema({
    name: String,
    difficulty: Number,
    comment: String,
    level: Number
},
{ timestamps: true }
);

const skillModel = mongoose.model('skills',skillSchema)

export default skillModel