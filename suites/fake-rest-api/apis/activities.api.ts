import { BaseApi } from '@core/base-api.api.js';

const baseUrl = process.env.FAKE_REST_API_BASE_URL as string;

class ActivitiesApi extends BaseApi {
  async getAllActivities() {
    return this.get(`${baseUrl}/Activities`, {});
  }

  async getActivityById(id: number) {
    return this.get(`${baseUrl}/Activities/${id}`, {});
  }
}

export default ActivitiesApi;