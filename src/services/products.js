import { Product } from '../db/models/products';

export const getAllProducts = async () => {
  const products = await Product.fi;
};
