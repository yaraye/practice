const router = require("express").Router();
const membersController = require("../../controller/membersController");

// Matches with "/api/members"
router.route("/")
  .get(membersController.findAll)
  .post(membersController.create)
  .put(membersController.update);

  router.route('/api/members/:id')
  .put(membersController.update);

// Matches with "/api/members/:id"
router
  .route("/:id")
  .get(membersController.findById)
  // .put(membersController.update)
  .delete(membersController.remove);


  

module.exports = router;

