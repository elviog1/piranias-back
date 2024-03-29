var express = require('express');
var router = express.Router();
const userRouter = require("./users")
const playerRouter = require("./player")
const teamRouter = require("./team")
const photoRouter = require("./photo")
const gameRouter = require('./games')
const noticeRouter = require('./notice')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({title: "holi"})
});

router.use("/auth", userRouter) 
router.use("/players", playerRouter) 
router.use("/teams", teamRouter) 
router.use("/photos", photoRouter) 
router.use("/games", gameRouter) 
router.use("/notices",noticeRouter)


module.exports = router;
