import { del, get, patch, post } from "./axios";

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

export async function postProduct(productData) {
  const product = await post(`/products`, productData);
  return product;
}

export async function getSizeReviews(productId) {
  const response = await get(`/products/${productId}/comments`);
  return response;
}

export async function uploadImage(file) {
  const formData = new FormData();
  formData.append("image", file);

  const token = localStorage.getItem("accessToken");

  const response = await post("/images/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.url || response.data?.url;
}

export async function getProduct(productId) {
  const product = await get(`/products/${productId}`);
  return product;
}

export async function getProductComments(productId, limit = 3) {
  const productComments = await get(
    `/products/${productId}/comments?limit=${limit}`,
  );
  return productComments;
}

export async function postProductComment(commentId, commentData) {
  const comment = await post(`/products/${commentId}/comments`, commentData);
  return comment;
}

export async function patchComment(commentId, commentData) {
  const comment = await patch(`/comments/${commentId}`, commentData);
  return comment;
}

export async function deleteComment(commentId) {
  const comment = await del(`/comments/${commentId}`);
  return comment;
}
