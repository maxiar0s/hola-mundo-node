const app = require("./app"); // The Express app
const config = require("./utils/config");
const logger = require("./utils/logger");

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});

// require("dotenv").config();
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const Note = require("./models/note");
// const config = require("./utils/config");

// let notes = [];

// //Middleware
// app.use(express.static("dist"));

// const requestLogger = (request, response, next) => {
//   console.log("Method:", request.method);
//   console.log("Path:  ", request.path);
//   console.log("Body:  ", request.body);
//   console.log("---");
//   next();
// };
// const errorHandler = (error, request, response, next) => {
//   console.error(error.message);

//   if (error.name === "CastError") {
//     return response.status(400).send({ error: "malformatted id" });
//   }

//   next(error);
// };

// app.use(cors());
// app.use(express.json());
// app.use(requestLogger);
// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: "unknown endpoint" });
// };

// // GET Request
// app.get("/", (request, response) => {
//   response.send("<h1>Hello World!</h1>");
// });

// app.get("/api/notes", (request, response) => {
//   Note.find({}).then((notes) => {
//     response.json(notes);
//   });
// });
// app.get("/api/notes/:id", (request, response, next) => {
//   Note.findById(request.params.id)
//     .then((note) => {
//       if (note) {
//         response.json(note);
//       } else {
//         response.status(404).end();
//       }
//     })
//     .catch((error) => {
//       next(error);
//     });
// });

// // app.get("/api/notes/:id", (request, response, next) => {
// //   Note.findById(request.params.id)
// //     .then((note) => {
// //       if (note) {
// //         response.json(note);
// //       } else {
// //         response.status(404).end();
// //       }
// //     })
// //     .catch((error) => next(error));
// // });

// // const generateId = () => {
// //   const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
// //   // const maxIdString = maxId.toString();
// //   return (maxId + 1).toString();
// // };

// //PUT Request
// app.put("/api/notes/:id", (request, response, next) => {
//   const { content, important } = request.body;

//   Note.findByIdAndUpdate(
//     request.params.id,
//     { content, important },
//     { new: true, runValidators: true, context: "query" }
//   )
//     .then((updatedNote) => {
//       response.json(updatedNote);
//     })
//     .catch((error) => next(error));
// });

// // app.put("/api/notes/:id", (request, response, next) => {
// //   // app.put("/api/notes/:id", (request, response) => {
// //   const id = request.params.id;
// //   // const note = notes.find((note) => note.id === id);
// //   Note.findByIdAndUpdate(id, request.body, { new: true })
// //     .then((updatedNote) => {
// //       response.json(updatedNote);
// //     })
// //     .catch((error) => next(error));
// //   // if (!note) {
// //   //   response.status(404).end();
// //   // } else {
// //   //   const updatedNote = { ...note, ...request.body };
// //   //   notes = notes.map((n) => (n.id === id ? updatedNote : n));
// //   //   response.json(updatedNote);
// //   // }
// // });

// //POST Request
// app.post("/api/notes", (request, response) => {
//   const body = request.body;

//   if (body.content === undefined) {
//     return response.status(400).json({ error: "content missing" });
//   }

//   const note = new Note({
//     content: body.content,
//     important: body.important || false,
//   });

//   note.save().then((savedNote) => {
//     response.json(savedNote);
//   });
// });

// //DELETE Request
// app.delete("/api/notes/:id", (request, response, next) => {
//   Note.findByIdAndDelete(request.params.id)
//     .then((result) => {
//       response.status(204).end();
//     })
//     .catch((error) => next(error));
// });

// app.use(unknownEndpoint);
// app.use(errorHandler);

// app.listen(config.PORT, () => {
//   logger.info(`Server running on port ${config.PORT}`);
// });

// // const PORT = process.env.PORT;
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });
