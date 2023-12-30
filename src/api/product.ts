import { FormAddProduct, Product } from '../types/product';
import { Endpoint } from '../types/request';
import { shopApiInstance } from './shopApi';

export const addProduct = async (
  formAddProduct: FormAddProduct
): Promise<Product> => {
  const formData = new FormData();
  formData.append('title', formAddProduct.title);
  formData.append('description', formAddProduct.description);
  formData.append('price', formAddProduct.price.toString());
  formData.append('category_id', formAddProduct.category_id);
  if (formAddProduct.image) {
    formData.append('image', formAddProduct.image);
  }

  const res = await shopApiInstance.post(
    `/${Endpoint.Products}`,
    formAddProduct,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  if (res.status >= 200 && res.status < 300) {
    return res.data as Product;
  } else {
    throw new Error(`Failed to create product`);
  }
};
