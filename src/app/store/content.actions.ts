import { createAction, props } from '@ngrx/store';

export const loadContent = createAction('[Content] Load Content', props<{ contentType: string }>());
export const loadContentSuccess = createAction('[Content] Load Content Success', props<{ data: any }>());
export const loadContentFailure = createAction('[Content] Load Content Failure', props<{ error: any }>());
