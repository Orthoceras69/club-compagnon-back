import mongoose from 'mongoose';
const { Schema } = mongoose;


const clubSchema = new Schema({
    name: String,
    coaches: [Schema.Types.mixed],
    students: [Schema.Types.mixed],
    groups: [Schema.Types.mixed]
},
{ timestamps: true }
);

const clubModel = mongoose.model('clubs',clubSchema)

export default clubModel