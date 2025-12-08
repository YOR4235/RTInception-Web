import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { IdeaService } from "./idea.service";
import * as ideaActions from "./idea.actions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class IdeaEffects {

  addIdea$;
  loadIdeas$;

  constructor(
    private actions$: Actions,
    private service: IdeaService
  ) {
    this.loadIdeas$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ideaActions.LoadIdeas),
        mergeMap(() =>
          this.service.loadIdeas().pipe(
            map((ideas) => ideaActions.LoadIdeasSuccess({ ideas })),
            catchError((error) =>
              of(ideaActions.loadIdeasFailure({ error: error.message }))
            )
          )
        )
      )
    );

    this.addIdea$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ideaActions.AddIdea),
        mergeMap(({ idea }) =>
          this.service.addIdea(idea).pipe(
            map((idea) => ideaActions.AddIdeaSuccess({ idea })),
            catchError((error) =>
              of(ideaActions.AddIdeaFailure({ error: error.message }))
            )
          )
        )
      )
    )
  }

}
