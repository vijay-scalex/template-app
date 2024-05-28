import type { AxiosInstance, AxiosResponse } from "axios";
import axios from "axios";
import type { IBaseService } from "./base.service.types";

export class BaseService implements IBaseService {
  private axiosInstance: AxiosInstance;
  private BASE_URL: string = process.env.REACT_APP_API_BASE_URL || "";

  constructor(baseUrl?: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl ?? this.BASE_URL,
    });
  }

  async get<TRequest, TResponse>(
    url: string,
    params?: TRequest
  ): Promise<TResponse> {
    const axiosResponse: AxiosResponse<TResponse> =
      await this.axiosInstance.get(url, {
        ...(params && { params: { ...params } }),
      });
    return axiosResponse.data;
  }

  async post<TRequest, TResponse>(
    url: string,
    request: TRequest
  ): Promise<TResponse> {
    const axiosResponse: AxiosResponse<TResponse> =
      await this.axiosInstance.post(url, request);
    return axiosResponse.data;
  }

  async delete<TRequest, TResponse>(
    url: string,
    params?: TRequest
  ): Promise<TResponse> {
    const axiosResponse: AxiosResponse<TResponse> =
      await this.axiosInstance.delete(url, {
        ...(params && { params: { ...params } }),
      });
    return axiosResponse.data;
  }
}
