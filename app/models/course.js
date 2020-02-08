const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const courseSchema = new Schema({
    nameCourse: { type: String, required: true },
    nameCenter: { type: String, required: true },
    others:{ type: String, required: true },
    // address
    tag:{ type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    phone:{ type: String},
    form:{ type: String},
    description: { type: String, required: true },
    //time 
    date: { type: Date, required: "" },
    created_at: { type: Date, required: "" }
});
const course = mongoose.model('course', courseSchema, 'course');
module.exports = course;