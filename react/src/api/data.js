import { get, post } from "./axios";

export async function getBestProducts(orderBy = "favorite", pageSize = 4) {
  const response = await get("/products", {
    params: {
      orderBy: orderBy,
      pageSize: pageSize,
    },
  });

  return response;
}

export async function getAllProducts(page, orderBy, keyword, pageSize) {
  const response = await get("/products", {
    params: {
      page: page,
      orderBy: orderBy,
      keyword: keyword,
      pageSize: pageSize,
    },
  });

  return response;
}

export async function getProduct(productId) {
  const product = await get(`/products/${productId}`);
  return product;
}

export async function postProduct() {
  const product = await post(`/products`);
  return product;
}

export async function getSizeReviews(productId) {
  const response = await get(`/products/${productId}/comments`);
  return response;
}
