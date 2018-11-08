const router = require('express').Router();
const loginController = require('../../controller/loginController')

module.exports = router;

router.route('/').get(loginController.findAllMember);

router.route('/').post(loginController.createMember);