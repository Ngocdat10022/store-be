import db from "@/config/db";
import { Category } from "@/interfaces/category.interface";
import { getAllProduct, getCategoryBySlug, getDetailProduct, getProductByCat } from "@/query";
import { NextFunction, Request, Response } from "express";

export class Product {
    public getAllProduct = async (req:Request, res:Response,next:NextFunction) =>{
        try {
            db.query(getAllProduct, async (err:Error,data:any) => {
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
            console.log("slug",slug)
            if(slug === "all") {
                db.query(getAllProduct, async (err:Error,data:any) => {
                    if (err) return res.status(409).json(err);
                    if (data.length) res.status(200).json(data);
                })
            }else{
                db.query(getCategoryBySlug, [slug.trim()], async(err:Error, data:any)=>{
                    if(err) res.status(409).json(err)
                    const catData:Category = data[0]
                    db.query(getProductByCat,[catData.idCat],async(err:Error, data:any)=>{
                    if(err) res.status(409).json(err)
                        if (data.length >= 0) res.status(200).json(data);
                    })
                })
            }
        } catch (error) {
            next(error);
        }
    }

    public getDetailProduct =  async (req:Request,res:Response,next:NextFunction)=>{
        try {
            const slug = req.params.slug
            db.query(getDetailProduct, [slug.trim()], async(err:Error, data:any)=>{
                if(err) res.status(409).json(err)
                const prodyctDetailData = data[0]
                if (data.length) res.status(200).json(prodyctDetailData);
            })
        } catch (error) {
            next(error);
            
        }
    }

    public buyProduct = async (req:Request,res:Response,next:NextFunction)=>{
        try {
            
        } catch (error) {
            
        }
    }

}