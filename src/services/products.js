import { Product } from '../db/models/products.js';

export const getAllProducts = async (query) => {
  const options = {};
  if (query.category) {
    options.category = query.category;
  }
  if (query.minPrice) {
    options.price = { $gte: query.minPrice };
  }
  if (query.maxPrice) {
    options.price = { $lte: query.maxPrice };
  }
  if (query.minPrice && query.maxPrice) {
    options.price = { $gte: query.minPrice, $lte: query.maxPrice };
  }
  const products = await Product.find(options);
  return products;
};

export const getProductById = async (productId) => {
  const product = await Product.findById(productId);
  console.log(product);

  return product;
};

export const createProduct = (product) => Product.create(product);
