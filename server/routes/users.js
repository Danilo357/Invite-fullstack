const router = require("express").Router()

const userGoing = []

const userNotGoing = []

router.get("/", (req, res, next) => {
  res.json(users)
})

router.post("/going", (req, res, next) => {})

module.exports = router
