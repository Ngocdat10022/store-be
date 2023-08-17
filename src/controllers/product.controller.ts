import db from "@/config/db";
import { Category } from "@/interfaces/category.interface";
import { getAllProduct, getCategoryBySlug, getProductByCat } from "@/query";
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

    public getProductByCat =  async (req:Request,res:Response,next:NextFunction)=>{
        try {
            const slug = req.params.slug
            db.query(getCategoryBySlug, [slug.trim()], async(err:any, data:any)=>{
                const catData:Category = data[0]
                db.query(getProductByCat,[catData.idCat],async(err:any, data:any)=>{
                    console.log("data",data.length)
                    if (data.length) res.status(200).json(data);
                })
            })

        } catch (error) {
            
        }
    }
}