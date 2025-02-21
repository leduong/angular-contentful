import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ContentfulService } from '../../services/contentful.service';
import * as ContentActions from './contentful.actions';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class ContentEffects {
  loadContent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContentActions.loadContent),
      mergeMap((action) =>
        this.contentfulService
          .getEntries(action.contentType)
          .then((response) =>
            ContentActions.loadContentSuccess({ data: response.items })
          )
          .catch((error) => ContentActions.loadContentFailure({ error }))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private contentfulService: ContentfulService
  ) {}
}
