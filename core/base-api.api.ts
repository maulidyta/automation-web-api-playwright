import type { APIRequestContext } from '@playwright/test';

type RequestOptions = Parameters<APIRequestContext['get']>[1];

export class BaseApi {
  constructor(protected request: APIRequestContext) {}

  async get(url: string, options?: RequestOptions) {
    return this.request.get(url, options);
  }

  async post(url: string, body?: unknown, options?: RequestOptions) {
    return this.request.post(url, {
      ...(options || {}),
      data: body,
    });
  }

  async put(url: string, body?: unknown, options?: RequestOptions) {
    return this.request.put(url, {
      ...(options || {}),
      data: body,
    });
  }

  async delete(url: string, options?: RequestOptions) {
    return this.request.delete(url, options);
  }
}