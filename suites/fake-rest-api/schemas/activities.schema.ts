import { array, integer, object, string, boolean } from 'superstruct';

export const GET_ALL_ACTIVITIES_RESPONSE = array(
    object({
        id: integer(),
        title: string(),
        dueDate: string(),
        completed: boolean()
    })
);

export const GET_ACTIVITY_BY_ID_RESPONSE = object({
    id: integer(),
    title: string(),
    dueDate: string(),
    completed: boolean()
});