const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/client");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

//  middleware
app.use(express.json());
app.use(cors());
app.use("/api", userRoutes);

// routes
app.get("/", (req, res) => {
   res.send("Hello World!");
});

// connect to MongoDB
mongoose
   .connect(process.env.MONGODB_URI)
   .then(() => {
      console.log("Connected to MongoDB");
   })
   .catch((err) => {
      console.log("Error connecting to MongoDB", err);
   });

app.listen(port, () => {
   console.log(`Server running on port ${port}`);
});
