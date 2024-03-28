import mongoose from 'mongoose';
import moduleModel from './Modules';
const { Schema } = mongoose;


const groupSchema = new Schema({
    name: String,
    modules: [{type:moduleModel}],
},
{ timestamps: true }
);

const groupModel = mongoose.model('groups',groupSchema)

export default groupModel