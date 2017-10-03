/**
 * Created by iZel on 10/2/17.
 */
import {default as User} from '../models/User';
import { Request, Response, NextFunction,IRoute } from "express";
import { abstractControl} from './abstractControl';

export class userController extends abstractControl{

    constructor(router:any){
        super(User,router);
    }
}
