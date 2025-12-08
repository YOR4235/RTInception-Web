import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideStore } from '@ngrx/store';
import { ideaReducer } from './app/ideas/idea.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { IdeaEffects } from './app/ideas/idea.effects';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideStore({ ideas: ideaReducer }),
    provideEffects([IdeaEffects]),
    provideStoreDevtools({ maxAge: 25 }),
  ],
})
  .then(() => console.log('✅ Angular app bootstrapped'))
  .catch((err) => console.error('❌ Bootstrap error:', err));
