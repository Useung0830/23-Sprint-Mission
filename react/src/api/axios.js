import Axios from "axios";

// 1. Axios 인스턴스 생성 (기본 설정)
const instance = Axios.create({
  baseURL: "https://panda-market-api.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); // 👈 이 이름이 맞는지 재확인!

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("✅ [인증성공] 헤더에 토큰이 부착되었습니다.");
    } else {
      console.error("❌ [인증실패] 로컬 스토리지에 토큰이 없습니다!");
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
