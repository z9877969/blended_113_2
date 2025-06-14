import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

export const productsRouter = Router();
productsRouter.get('/', ctrlWrapper);
