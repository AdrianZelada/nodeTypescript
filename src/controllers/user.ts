/**
 * Created by iZel on 10/2/17.
 */
import {default as User} from '../models/User';
import { Request, Response, NextFunction } from "express";


export let getAll = (req:Request,res:Response)=>{
    User.find((err,data)=>{
        if(err) return console.log(err);
        return res.json(data);
    })
}