import Axios from "axios";

// 1. Axios 인스턴스 생성 (기본 설정)
const instance = Axios.create({
  baseURL: "https://panda-market-api.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

// 2. 공통 요청 함수 (내부용)
async function request(config) {
  try {
    const response = await instance(config);
    return response.data; // Axios는 데이터를 .data에 담아줍니다.
  } catch (error) {
    // 에러 발생 시 처리
    const status = error.response ? error.response.status : "NETWORK_ERROR";
    const newError = new Error(`HTTP error! status: ${status}`);
    newError.status = status;
    throw newError;
  }
}

// 3. 각 메서드별 내보내기 (Export)
export async function get(path, options = {}) {
  return request({
    ...options,
    url: path,
    method: "GET",
  });
}

export async function post(path, data, options = {}) {
  return request({
    ...options,
    url: path,
    method: "POST",
    data: data, // Axios는 body 대신 data를 사용합니다.
  });
}

export async function patch(path, data, options = {}) {
  return request({
    ...options,
    url: path,
    method: "PATCH",
    data: data,
  });
}

export async function del(path, options = {}) {
  return request({
    ...options,
    url: path,
    method: "DELETE",
  });
}
