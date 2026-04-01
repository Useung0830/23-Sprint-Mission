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

  // 💡 중요: 서버 응답 객체 구조를 확인하세요.
  // 보통 response.url 또는 response.data.url에 주소가 있습니다.
  return response.url || response.data?.url;
}
