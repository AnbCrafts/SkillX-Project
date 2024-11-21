import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true 
        },
        dob: {
            type: Date,
            required: true 
        },
        phone: {
            type: String,
            required: true 
        },
        guardian: {
            type: String,
            required: true 
        },
        problem: {
            type: String,
            required: true 
        },
        solution: {
            type: String,
            required: true 
        },
        drugs: {
            type: String,
            required: true 
        },
        date_time: {
            type: Date,
            required: true,
            default: Date.now 
        },
    },
    {
        timestamps: true
    }
);

export const patient = mongoose.model('patient', patientSchema);
