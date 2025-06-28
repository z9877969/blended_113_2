import { Product } from '../db/models/products.js';

export const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

export const getProductById = async (productId) => {
  const product = await Product.findById(productId);
  console.log(product);

  return product;
};

export const createProduct = (product) => Product.create(product);
