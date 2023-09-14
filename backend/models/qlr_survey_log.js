// models/qlr_survey_log.js

const mongoose = require("mongoose");

const qlrSurveyLogSchema = new mongoose.Schema({
    reducer1_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'qlr', 
    },
    reducer1_name: String,
    reducer2_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'qlr', 
    },
    reducer2_name: String, 
    greater_reducer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'qlr', 
    },
    greater_reducer_name: String,
    created_datetime: {
        type: Date,
        default: Date.now, // Set the default value to the current date and time
    },

});

module.exports = mongoose.model("QLRSurveyLog", qlrSurveyLogSchema);
