import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);

export default Note;
