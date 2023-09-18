import db from '@/config/db';
import { NextFunction, Request, Response } from 'express';

export class Cart {
  public addCart = async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (error) {
      next(error);
    }
  };
}
