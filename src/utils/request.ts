import axios from "axios";
import type {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosRequestConfig,
  AxiosError,
} from "axios";
import { message } from "ant-design-vue";

export interface Result<T = any> {
  code: number;
  message: string;
  data: T;
}
const service: AxiosInstance = axios.create({
  baseURL: "https://www.cloudmusic.top",
  timeout: 5000,
});

//请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    message.error(error.message);
    return Promise.reject(error);
  }
);

//响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code } = response.data;
    if (code === 200) {
      return response.data;
    } else {
      message.error("请求失败");
      return Promise.reject(new Error());
    }
  },
  (error: AxiosError) => {
    //处理http网络错误
    let msg: string = "";
    switch (error.response?.status) {
      case 401:
        msg = "token失效,请重新登录";
        break;
      case 403:
        msg = "拒绝访问";
        break;
      case 404:
        msg = "请求资源不存在";
        break;
      case 500:
        msg = "服务器内部错误";
        break;
      default:
        msg = "网络连接错误";
    }
    message.error(msg);
    return Promise.reject(error);
  }
);

//导出请求方法
export const http = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.get(url, config);
  },
  post<T = any>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return service.post(url, data, config);
  },
};

export default service;
