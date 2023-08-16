import { Routes } from '@/interfaces/routes.interface';
import { Router } from 'express';
import {Category} from "@/controllers/category.controller"
import { Product } from '@/controllers/product.controller';
export class Products implements Routes {
  public router = Router();
 public products = new Product()
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/products', this.products.getAllProduct);
  }
}
