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
recordRoutes.route("/recordTeacher").get(function (req, res) {
    let db_connect = dbo.getDb("Database");
    db_connect
      .collection("record Teacher")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });


// This section will help you get a single record by id
recordRoutes.route("/recordTeacher/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect
        .collection("record Teacher")
        .findOne(myquery, function (err, result) {
          if (err) throw err;
          res.json(result);
        });
  });
  

// This section will help you create a new record.
recordRoutes.route("/recordTeacher/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      ID :req.body.ID,
      Teacher_Name :req.body.Teacher_Name,
      Specialization :req.body.Specialization,
      Email :req.body.Email,
      Phone :req.body.Phone,
      Office_Number :req.body.Office_Number,



    };
    db_connect.collection("record Teacher").insertOne(myobj, function (err, res) {
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
              Teacher_Name :req.body.Teacher_Names,
              Specialization :req.body.Specialization,
              Email :req.body.Email,
              Phone :req.body.Phone,
              Office_Number :req.body.Office_Number,
        

      },
    };
    db_connect
      .collection("record Teacher")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        response.json(res);
      });
  });
   
  
// This section will help you delete a record
recordRoutes.route("/recordTeacher/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect.collection("record Teacher").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
     
    });
  });
   


 
  module.exports = recordRoutes;