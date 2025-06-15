import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getProductsController,
  getProductByIdController,
} from '../controllers/products.js';

export const productsRouter = Router();
productsRouter.get('/', ctrlWrapper(getProductsController));

productsRouter.get('/:productId', ctrlWrapper(getProductByIdController));
