import db from '@/config/db';
import { getAllCat } from '@/query';
import { NextFunction, Request, Response } from 'express';

export class Category {
  public getAllCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      db.query(getAllCat, async (err: Error, data: any) => {
        if (err) return res.status(409).json(err);
        if (data.length) res.status(200).json(data);
      });
    } catch (error) {
      next(error);
    }
  };
}
