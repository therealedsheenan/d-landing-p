import { NextFunction, Request, Response } from "express";

/*
* GET home page.
*/
export let index = (req: Request, res: Response, next: NextFunction) => {
  res.render("index", {
    title: "Landing page.",
    description: "This is the landing page"
  });
};

/*
* GET sample page.
*/
export let sample = (req: Request, res: Response, next: NextFunction) => {
  res.send("This is the users endpoint.");
};
