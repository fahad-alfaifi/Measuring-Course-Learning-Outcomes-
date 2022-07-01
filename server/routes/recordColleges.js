const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

 

// This section will helDepartment_Idp you get a list of all the records.
recordRoutes.route("/recordColleges").get(function (req, res) {
    let db_connect = dbo.getDb("Database");
    db_connect
      .collection("record Colleges")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });


// This section will help you get a single record by id
recordRoutes.route("/recordColleges/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect
        .collection("record Colleges")
        .findOne(myquery, function (err, result) {
          if (err) throw err;
          res.json(result);
        });
  });
  

// This section will help you create a new record.
recordRoutes.route("/recordColleges/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      College_Name :req.body.College_Name,
      Vision :req.body.Vision,
      Mission: req.body.Mission,
      Values: req.body.Values,
      Goals: req.body.Goals
    };
    db_connect.collection("record Colleges").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
      });
    });  
    

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    let newvalues = {
      $set: {
        
        College_Name :req.body.College_Name,
        Vision :req.body.Vision,
        Mission: req.body.Mission,
        Values: req.body.Values,
        Goals: req.body.Goals,
      },
    };
    db_connect
      .collection("record Colleges")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        response.json(res);
      });
  });
   
  
// This section will help you delete a record
recordRoutes.route("/recordColleges/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("record Colleges").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

   


recordRoutes.route("/recordDepartment/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { Department_Id: ObjectId( req.params.id )};
  db_connect
      .collection("record Department")
      .find(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});




 
  module.exports = recordRoutes;