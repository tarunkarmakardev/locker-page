import { Router } from "express";
import getEnv from "../../env/env";

const lockerRouter = Router();

lockerRouter.post("/check-password", (req, res) => {
  const password = req.body.password;
  const envPassword = Buffer.from(getEnv().password).toString("base64");

  if (password === envPassword) {
    return res.send({
      message: "Successfully authenticated.",
    });
  }
  return res.status(400).send({
    error: "Incorrect Password!",
  });
});

export default lockerRouter;
