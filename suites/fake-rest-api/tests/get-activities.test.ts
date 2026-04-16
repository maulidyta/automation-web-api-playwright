import { test, expect } from '@playwright/test';
import { assert } from 'superstruct';
import ActivitiesApi from '../apis/activities.api.js';
import { GET_ALL_ACTIVITIES_RESPONSE, GET_ACTIVITY_BY_ID_RESPONSE } from '../schemas/activities.schema.js';

test.describe('Get Activities', {tag: '@api-automation'}, ()=> {
  test('Successfully get all activities', async ({request}) => {
    const activitiesApi = new ActivitiesApi(request);
    const getAllActivities = await activitiesApi.getAllActivities();
    const getAllActivitiesJson = await getAllActivities.json();
    
    expect(getAllActivities.status()).toBe(200);
    expect(getAllActivitiesJson.length).toBeGreaterThan(0);
    expect(getAllActivitiesJson[0]).toHaveProperty('id');
    expect(getAllActivitiesJson[0]).toHaveProperty('title');
    expect(getAllActivitiesJson[0]).toHaveProperty('dueDate');
    expect(getAllActivitiesJson[0]).toHaveProperty('completed');

    assert(getAllActivitiesJson, GET_ALL_ACTIVITIES_RESPONSE);
  });

  test('Successfully get activity by ID', async ({request}) => {
    const id = 2;
    const activitiesApi = new ActivitiesApi(request);
    const getActivityById = await activitiesApi.getActivityById(id);
    const getActivityByIdJson = await getActivityById.json();
    
    expect(getActivityById.status()).toBe(200);
    expect(getActivityByIdJson).toHaveProperty('id');
    expect(getActivityByIdJson).toHaveProperty('title');
    expect(getActivityByIdJson).toHaveProperty('dueDate');
    expect(getActivityByIdJson).toHaveProperty('completed');

    assert(getActivityByIdJson, GET_ACTIVITY_BY_ID_RESPONSE);
  });
});