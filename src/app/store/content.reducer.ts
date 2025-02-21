import { createReducer, on } from '@ngrx/store';
import * as ContentActions from './content.actions';

export interface ContentState {
  data: any[];
  error: any;
}

export const initialState: ContentState = {
  data: [],
  error: null
};

export const contentReducer = createReducer(
  initialState,
  on(ContentActions.loadContentSuccess, (state, { data }) => ({ ...state, data })),
  on(ContentActions.loadContentFailure, (state, { error }) => ({ ...state, error }))
);
