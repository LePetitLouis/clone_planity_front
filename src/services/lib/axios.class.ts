import axiosLibrary, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

class Axios {
  private instance: AxiosInstance;
  private accessToken: string|null = null;

  constructor() {
    this.instance = axiosLibrary.create({
      baseURL: 'http://localhost:8097/',
      timeout: 10000,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  setAuthorization = (accessToken: string|null) => {
    if (accessToken) this.instance.defaults.headers.common.Token = accessToken
    else delete this.instance.defaults.headers.common.Token
    this.accessToken = accessToken
  }

  async get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>{
    return this.instance.get(url, config)
  }

  post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.instance.post(url, data, config);
  }

  delete<D = any>(url: string, config?: AxiosRequestConfig<D>) {
    return this.instance.delete(url, config)
  }

  patch<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.instance.patch(url, data, config);
  }
}

export const axios = new Axios()