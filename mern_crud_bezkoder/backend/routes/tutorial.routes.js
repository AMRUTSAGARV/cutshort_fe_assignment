module.exports = (app) => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  router.post("/", tutorials.create);

  router.get("/", tutorials.findAll); //eg :- Find all Tutorials which title contains ‘js’: GET /tutorials?title=js

  router.get("/published", tutorials.findAllPublished);

  router.get("/:id", tutorials.findOne);

  router.put("/:id", tutorials.update);

  router.delete("/:id", tutorials.delete);

  router.delete("/", tutorials.deleteAll);

  app.use("/api/tutorials", router); //this line "/" equals "/api/tutorials"
};
