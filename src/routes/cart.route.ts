import { Cart } from '@/controllers/cart.controller';
import { Routes } from '@/interfaces/routes.interface';
import { Router } from 'express';
export class Categorys implements Routes {
  public router = Router();
 public cart = new Cart()
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/cart', this.cart.addCart);
  }
}

