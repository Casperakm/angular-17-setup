import { ApplicationConfig, isDevMode, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideExperimentalZonelessChangeDetection(),
  provideRouter(routes, withViewTransitions()), provideHttpClient(withFetch()), provideAnimations(),]
};
