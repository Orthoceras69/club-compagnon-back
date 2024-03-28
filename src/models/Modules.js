import mongoose from 'mongoose';
const { Schema } = mongoose;


const moduleSchema = new Schema({
    name: String,
    skills: [{type:skillModel}],
},
{ timestamps: true }
);

const moduleModel = mongoose.model('modules',moduleSchema)

export default moduleModel