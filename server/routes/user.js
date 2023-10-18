const express = require("express");
const userRouter = express.Router()

userRouter.post("/signup");
userRouter.get("/login");
userRouter.put("/login/:id");
userRouter.delete("/login/:id");

module.exports = userRouter;