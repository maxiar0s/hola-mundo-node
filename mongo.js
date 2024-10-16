require("dotenv").config();
const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://admin:${password}@cluster0.nwezd.mongodb.net/notesApp?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false);
mongoose.connect(url).then(() => {
  const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
  });

  const Note = mongoose.model("Note", noteSchema);

  const note = new Note({
    content: process.argv[3],
    important: process.argv[4] === "true" ? true : false,
  });

  if (process.argv.length === 3) {
    Note.find({}).then((result) => {
      result.forEach((note) => {
        console.log(note);
      });
      mongoose.connection.close();
    });
  } else if (process.argv.length === 5) {
    note.save().then((result) => {
      console.log("note saved!");
      mongoose.connection.close();
    });
  }
});
