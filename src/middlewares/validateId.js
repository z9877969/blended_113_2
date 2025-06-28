import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const validateId = (req, res, next) => {
  try {
    /* 
        req.params -> {
            productId: "684d81cd5b07dc1300cb0fca",
            colorId: "684d81cd5b07dc1300cb0fca",
            size: 'xl'
        }
    */
    const paramsWithId = Object.entries(req.params).filter(([key, value]) => {
      return key.toLowerCase().endsWith('id');
    });

    const isExistInvalidId = paramsWithId.some(([key, id]) => {
      return !isValidObjectId(id);
    });

    if (isExistInvalidId) {
      throw createHttpError(400, 'Invalid id');
    }
    next();
  } catch (error) {
    next(error);
  }
};
