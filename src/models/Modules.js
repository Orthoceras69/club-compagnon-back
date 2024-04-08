import mongoose from 'mongoose';
const { Schema } = mongoose;


const moduleSchema = new Schema({
    name: String,
    skills: [Schema.Types.mixed]
},
{ timestamps: true }
);

const moduleModel = mongoose.model('modules',moduleSchema)

export default moduleModel