export interface IBaseService {
  get<TRequest, TResponse>(url: string, params: TRequest): Promise<TResponse>;
  post<TRequest, TResponse>(url: string, request: TRequest): Promise<TResponse>;
  delete<TRequest, TResponse>(
    url: string,
    params: TRequest
  ): Promise<TResponse>;
}
