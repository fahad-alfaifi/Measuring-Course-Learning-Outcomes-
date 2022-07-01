const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

 

// This section will help you get a list of all the records.
recordRoutes.route("/recordMarks").get(function (req, res) {
    let db_connect = dbo.getDb("Database");
    db_connect
      .collection("record Marks")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });


// This section will help you get a single record by id
recordRoutes.route("/recordMarks/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect
        .collection("record Marks")
        .findOne(myquery, function (err, result) {
          if (err) throw err;
          res.json(result);
        });
  });
  

// This section will help you create a new record.
recordRoutes.route("/recordMarks/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      ID :req.body.ID,
      Assign1: req.body.Assign1,
      Assign2: req.body.Assign2,
      Quiz1: req.body.Quiz1,
      Quiz2: req.body.Quiz2,
      Mid1: req.body.Mid1,
      Mid2: req.body.Mid2,
      LAB: req.body.LAB,
      Final: req.body.Final
    };
    db_connect.collection("record Marks").insertOne(myobj, function (err, res) {
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
    
        ID :req.body.ID,
        Assign1: req.body.Assign1,
        Assign2: req.body.Assign2,
        Quiz1: req.body.Quiz1,
        Quiz2: req.body.Quiz2,
        Mid1: req.body.Mid1,
        Mid2: req.body.Mid2,
        LAB: req.body.LAB,
        Final: req.body.Final
      },
    };
    db_connect
      .collection("record Marks")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        response.json(res);
      });
  });
   
  
// This section will help you delete a record
recordRoutes.route("/Marks/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect.collection("record Marks").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
     
    });
  });
   


 
  module.exports = recordRoutes;