const express = require("express");
const path = require("path");

const server = express();

server.get("/download", (req, res, next) => {
  const filePath = path.join(__dirname, "index.html");
  // res.sendFile(filePath);
  res.sendFile(filePath, err => {
    if (err) {
      next(err);
    } else {
      console.log("file sent successfully.");
    }
  });
});

server.get("/:errorCode", (req, res, next) => {
  let errorCode = req.params.errorCode;
  console.log(req.params);

  if (errorCode == "1500") {
    res.status(500).json({
      message: "There was an error performing the required operation"
    });
  }

  if (errorCode == "1404") {
    res.status(400).json({
      message: "not found"
    });
  }
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "There was an error performing the required operation",
    error: err
  });
});

server.listen(5000, () => {
  console.log("magic happening on 5000");
});
