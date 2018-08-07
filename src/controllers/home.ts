import { NextFunction, Request, Response } from "express";

/*
 * GET home page.
 */
export let index = (req: Request, res: Response, next: NextFunction) => {
  res.render("index", {
    description: "This is the landing page",
    title: "Landing page."
  });
};

/*
 * GET sample page.
 */
export let sample = (req: Request, res: Response, next: NextFunction) => {
  res.send("This is the users endpoint.");
};
