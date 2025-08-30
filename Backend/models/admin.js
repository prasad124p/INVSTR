const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {  // Hashed password for security
        type: String,
        required: true
    },
    role: {  // For permission checks
        type: String,
        default: "admin"
    }
}, { timestamps: true });

module.exports = mongoose.model("admin", adminSchema);
