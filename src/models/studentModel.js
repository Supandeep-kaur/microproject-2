import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, match: /.+@.+\..+/ },
  age: { type: Number, required: true, min: 16 },
  major: {
    type: String,
    required: true,
    enum: ["IT", "Computer Science", "Engineering", "Business", "Other"]
  },
  gpa: { type: Number, min: 0, max: 4 }
});

export const Student = mongoose.model("Student", studentSchema);
