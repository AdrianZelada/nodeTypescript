/**
 * Created by iZel on 10/2/17.
 */
import {default as User} from '../models/User';
import { Request, Response, NextFunction,Router } from "express";
import { abstractControl} from './abstractControl';

export class userController extends abstractControl{


    constructor(router:Router){
        super(User,router);
    }
}
