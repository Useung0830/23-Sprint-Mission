import axios from "axios";

const PANDA_API = import.meta.env.VITE_AXIOS_API_BASE_URL;

const instance = axios.create({
  baseURL: PANDA_API,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); // 👈 이 이름이 맞는지 재확인!

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

async function request(config) {
  try {
    const response = await instance(config);
    return response.data;
  } catch (error) {
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
