/**
 * Created by iZel on 10/2/17.
 */
import { Request, Response, NextFunction , Router} from "express";

export class abstractControl{

    model:any;
    router:Router;
    constructor(public schema:any,public route:Router){
        this.model=schema;
        this.router=route;
        this.router.get('/',this.list.bind(this));
    }

    list(req:Request,res:Response){
        this.model.find((e:any,data:any)=>{
            if(e){
                res.json({
                    error:true
                })
            }
            res.json(data);
        })
    }

}

