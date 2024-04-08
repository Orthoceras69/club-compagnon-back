import mongoose from 'mongoose';
const { Schema } = mongoose;


const groupSchema = new Schema({
    name: String,
    modules: [Schema.Types.mixed]
},
{ timestamps: true }
);

const groupModel = mongoose.model('groups',groupSchema)

export default groupModel