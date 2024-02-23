import mongoose from 'mongoose';

const habitsSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    dateTime:{
        type:Date,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        required:true
    }
})

const Habits = mongoose.model('habits', habitsSchema)
export default Habits