import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    RollNumber: { type: Number, required: true },
    Name: { type: String, required: true },
    Birthday: { type: Date, required: true },
    Address: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);
export { User };
