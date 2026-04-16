import { test, expect } from '@playwright/test';
import { assert } from 'superstruct';
import ActivitiesApi from '../apis/activities.api.js';
import { REQUEST_BODY_POST_ACTIVITIES } from '../data/activities.data.js';
import { GET_ACTIVITY_BY_ID_RESPONSE } from '../schemas/activities.schema.js';

test.describe('Post Activities', {tag: '@api-automation'}, ()=> {
  test('Successfully post activities', async ({request}) => {
    const activitiesApi = new ActivitiesApi(request);
    const postActivities = await activitiesApi.postActivities(REQUEST_BODY_POST_ACTIVITIES);
    const postActivitiesJson = await postActivities.json();
    
    expect(postActivities.status()).toBe(200);
    expect(postActivitiesJson.id).toEqual(REQUEST_BODY_POST_ACTIVITIES.id);
    expect(postActivitiesJson.title).toEqual(REQUEST_BODY_POST_ACTIVITIES.title);
    expect(postActivitiesJson.dueDate).toEqual(REQUEST_BODY_POST_ACTIVITIES.dueDate);
    expect(postActivitiesJson.completed).toEqual(REQUEST_BODY_POST_ACTIVITIES.completed);

    assert(postActivitiesJson, GET_ACTIVITY_BY_ID_RESPONSE);
  });
});