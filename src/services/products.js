import { Product } from '../db/models/products.js';

export const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

export const getProductById = async (productId) => {
  console.log('====================================');
  console.log(productId);
  console.log('====================================');
  const product = await Product.findOne({ _id: productId });
  console.log(product);

  return product;
};
