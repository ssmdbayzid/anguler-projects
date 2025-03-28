import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom  } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Keep this if needed
    provideRouter(routes),
    provideClientHydration(), // Removed withEventReplay() to prevent double execution
    importProvidersFrom(HttpClientModule)
  ]
};
