const router = require("express").Router()
const Controller = require("../controllers")


router.get("/registration", Controller.registration)
router.post("/registration", Controller.createUser)
router.get("/login", Controller.login)
// router.post("/login", Controller.loginPost)
router.get("/ownUser/:id", Controller.ownUser)
router.get("/post/destroy", Controller.cleanUpExpiredPostTask)
router.get("/post", Controller.post)
router.post("/memes/add", Controller.createMeme)
router.get("/memes/:id/vote", Controller.voteMeme)
router.get("/memes/:id/funny", Controller.isFunnyMeme)

module.exports = router;