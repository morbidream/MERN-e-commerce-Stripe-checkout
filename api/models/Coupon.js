const mongoose = require("mongoose");

const CouponSchema = new mongoose.Schema({   
    type: String,
    code: {
        type: String,
        required: true,
        },
    startDate: {
        type: Date,
        required: true,
        },
    endDate: {
        type: Date,
        required: true,
        },
    value: {
        type: Number,
        required: true,
        },       
});

module.exports = mongoose.model("coupon", CouponSchema);








