import { get } from "./axios";

export async function getInitialProducts(q = "") {
  const query = q ? `&q=${q}` : "";
  const response = await get(`/products?offset=0&limit=9${query}`);
  return response;
}

export async function getProduct(productId) {
  const product = await get(`/products/${productId}`);
  return product;
}

export async function getSizeReviews(productId) {
  const response = await get(`/products/${productId}/comments`);
  return response;
}
