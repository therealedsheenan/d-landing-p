import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

/*
* GET home page.
*/
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.render("index", { title: "Landing page.", description: "This is the landing page" });
});

/*
* GET users listing
*/
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("This is the users endpoint.");
});

export default router;
