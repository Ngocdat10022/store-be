import { Routes } from '@/interfaces/routes.interface';
import { Router } from 'express';
import {Category} from "@/controllers/category.controller"
export class Categorys implements Routes {
  public router = Router();
 public category = new Category()
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/category', this.category.getAllCategory);
  }
}

