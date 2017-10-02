/**
 * Created by iZel on 9/30/17.
 */
import { Request, Response } from "express";

/**
 * GET /
 * Home page.
 */
export let index = (req: Request, res: Response) => {
    res.render("index");
};
