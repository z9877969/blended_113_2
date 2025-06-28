import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getProductsController,
  getProductByIdController,
  addProductController,
} from '../controllers/products.js';
import { validateBody } from '../utils/validateBody.js';
import { productCreatingSchema } from '../validation/productsSchemas.js';
import { validateId } from '../middlewares/validateId.js';

export const productsRouter = Router();
productsRouter.get('/', ctrlWrapper(getProductsController));

productsRouter.post(
  '/',
  validateBody(productCreatingSchema),
  ctrlWrapper(addProductController),
);

productsRouter.get(
  '/:productId',
  validateId,
  ctrlWrapper(getProductByIdController),
);

// productsRouter.put(
//   '/:productId',
//   validateId,
//   // ctrlWrapper(getProductByIdController),
// );
