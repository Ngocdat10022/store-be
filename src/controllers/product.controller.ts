import db from "@/config/db";
import { getAllProduct } from "@/query";
import { NextFunction, Request, Response } from "express";

export class Product {
    public getAllProduct = async (req:Request, res:Response,next:NextFunction) =>{
        try {
            db.query(getAllProduct, async (err:any,data:any) => {
                if (err) return res.status(409).json(err);
                if (data.length) res.status(200).json(data);
            })
        } catch (error) {
            next(error);
        }
    }
}