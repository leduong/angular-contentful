import { createReducer, on } from '@ngrx/store';
import * as ContentActions from './contentful.actions';

export interface ContentState {
  data: any[];
  error: any;
}

export const initialContentState: ContentState = {
  data: [],
  error: null,
};

export const contentReducer = createReducer(
  initialContentState,
  on(ContentActions.loadContentSuccess, (state, { data }) => ({
    ...state,
    data,
  })),
  on(ContentActions.loadContentFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
