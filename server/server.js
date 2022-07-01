
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
app.use(require("./routes/recordMarks"));
app.use(require("./routes/recordClos"));
app.use(require("./routes/recordColleges"));
app.use(require("./routes/recordDepartment")); 
app.use(require("./routes/recordAcademic"));
app.use(require("./routes/recordSemester"));
app.use(require("./routes/recordPrograms"));
app.use(require("./routes/recordTeacher"));
app.use(require("./routes/recordSection"));

// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});

